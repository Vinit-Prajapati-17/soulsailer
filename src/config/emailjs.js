// EmailJS Configuration
// Replace these with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'service_licweld', // Replace with your EmailJS service ID
  templateId: 'template_n564jku', // Replace with your EmailJS template ID  
  publicKey: 'DGW2rW5Wkc6MqVNHS', // Replace with your EmailJS public key
}

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{phone}} - Phone number
//    - {{destination}} - Preferred destination
//    - {{travelers}} - Number of travelers
//    - {{message}} - Message content
//    - {{to_name}} - Recipient name (SoulSailer Team)
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values above with your actual credentials