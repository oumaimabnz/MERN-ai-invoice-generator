const Groq = require("groq-sdk")
const Invoice = require("../models/Invoice")

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

const parseInvoiceFromText = async (req, res) => {
    const { text } = req.body

    if (!text) {
        return res.status(400).json({ message: "Text is required"})
    }

    try {
        const prompt = `You are an expert Invoice data extraction AI. Analyze the following text and extract the relevant information to create an invoice. 
          The output MUST be a valid JSON object.
          
          The JSON object should have the following structure: 
          {
            "clientName": "string",
            "email": "string (if available)",
            "address": "string (if available)",
            "items": [
               {
                 "name": "string",
                 "quantity": "number",
                 "unitPrice": "number
               }
            ]
          }
          
          Here is the text to parse:
          --- TEXT START ---
          ${text}
          --- TEXT END ---

          Extract the data and provide only the JSON object.`

         const completion = await groq.chat.completions.create({
           model: "llama-3.1-8b-instant", 
           messages: [{ role: "user", content: prompt }],
           temperature: 0,
        })

          const responseText = completion.choices[0].message.content

          const cleanedJson = responseText
            .replace(/```json/gi, '')
            .replace(/```/g, '')
            .trim()
 
          const parsedData = JSON.parse(cleanedJson)

          res.status(200).json(parsedData)
    } catch (error) {
        console.error("Error parsing invoice with AI:", error)
        res.status(500).json({ message: "Failed to parse invoice data from text", details: error.message })

    }
}

const generateReminderEmail = async (req, res) => {

    const  {invoiceId}  = req.body

    if (!invoiceId) {
        return res.status(400).json({ message: "Invoice ID is required" })
    }
    try {
        const invoice = await Invoice.findById(invoiceId)
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found" })
        }
        const prompt = ` 
         You are a professional and polite accounting assistant. Write a friendly reminder email to a client about an overdue or upcoming invoice payment.
         Use the following details to personalize the email:
         
         - Client Name: ${invoice.billTo.clientName}
         - Invoice Number: ${invoice.invoiceNumber}
         - Amount Due: ${invoice.total.toFixed(2)}
         - Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}
         
          The tone should be friendly but clear. Keep it concise. Start the email with "Subject:".`

        const completion = await groq.chat.completions.create({
           model: "llama-3.1-8b-instant", 
           messages: [{ role: "user", content: prompt }],
           temperature: 0,
        }) 
        
        const responseText = completion.choices[0].message.content

        res.status(200).json({ reminderText: responseText })

    } catch (error) {
        console.error("Error generating reminder email with AI:", error)
        res.status(500).json({ message: "Failed to parse invoice data from text", details: error.message })

    }
}

const getDashboardSummary = async (req, res) => {
    try {
        const invoices = await Invoice.find({ user: req.user.id })

        if (invoices.length === 0) {
            return res.status(200).json({ insights: ["No invoice data available to generate insights."]})
        }

        const totalInvoices = invoices.length
        const paidInvoices = invoices.filter(inv => inv.status === 'Paid')
        const unpaidInvoices = invoices.filter(inv => inv.status !== 'Paid')
        const totalRevenue = paidInvoices.reduce((acc, inv) => acc + inv.total, 0)
        const totalOutstanding = unpaidInvoices.reduce((acc, inv) => acc + inv.total, 0)

        const dataSummary = `
         - Total number of invoices: ${totalInvoices}
         - Total paid invoices: ${paidInvoices.length}
         - Total unpaid/pending invoices: ${unpaidInvoices.length}
         - Total revenue from paid invoices: ${totalRevenue.toFixed(2)}
         - Total outstanding amount from unpaid/pending invoices: ${totalOutstanding.toFixed(2)}
         - Recent invoices (last 5): ${invoices.slice(0, 5).map(inv => `invoice #${inv.invoiceNumber} for ${inv.total.toFixed(2)} with status ${inv.status}`).join(', ')}
        `

        const prompt = `
          You are a friendly and insightful financial analyst for small business owner.
          Based on the following summary of their invoice data, provide 2-3 concise and actionable insights.
          Each insight should be a short string in a JSON array.
          The insights should be encouraging and helpful. Do not just repeat the data.
          For example, if there is a high outstanding amount, suggest sending reminders.
          
          Data Summary:
          ${dataSummary}
          
          Return your response as a valid JSON object with a single key "insights" which is an array of strings.
          Example format: 
            { 
              "insights": [
                "Your revenue is looking strong his month!", "You have 5 overdue invoices. Consider sending reminders to get paid faster."
               ]
            }
        `

        const completion = await groq.chat.completions.create({
           model: "llama-3.1-8b-instant", 
           messages: [{ role: "user", content: prompt }],
           temperature: 0,
        }) 

        const responseText = completion.choices[0].message.content
        
        const raw = responseText.trim()

        const jsonMatch = raw.match(/\{[\s\S]*\}/)

        if (!jsonMatch) {
           throw new Error("AI response did not contain valid JSON")
        }

        const parsedData = JSON.parse(jsonMatch[0])


        res.status(200).json(parsedData)

    } catch (error) {
        console.error("Error getting dashboard summary with AI:", error)
        res.status(500).json({ message: "Failed to parse invoice data from text", details: error.message })

    }
}

module.exports = { parseInvoiceFromText, generateReminderEmail, getDashboardSummary }