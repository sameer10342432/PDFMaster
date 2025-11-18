import { CalculatorContent } from '@/types';

export const CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT: CalculatorContent = {
  title: 'Client Testimonial Request Generator',
  description: 'Generate professional testimonial request messages customized for email, text, or social media to collect powerful client reviews.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'client-testimonial-request-generator',
  article: {
    title: 'Client Testimonials for Real Estate Agents: Complete Request Guide',
    content: `
Client testimonials are the most powerful marketing tool for real estate agents, providing social proof that influences potential clients' decisions.

### Why Testimonials Matter

**Trust Building:**
- 92% of consumers read online reviews
- Testimonials overcome skepticism
- Third-party validation more credible
- Reduces perceived risk for clients

**Marketing Power:**
- Use in listing presentations
- Feature on website and social media
- Include in email marketing
- Share in advertising campaigns

**SEO Benefits:**
- Google values fresh reviews
- Improves local search ranking
- Increases click-through rates
- Enhances Google Business Profile

**Conversion Impact:**
- 88% trust online reviews as much as personal recommendations
- Positive reviews increase conversion by 270%
- Testimonials reduce sales cycle time
- Address objections proactively

### When to Request Testimonials

**Optimal Timing:**
- Right after successful closing (within 24-48 hours)
- When client expresses extreme satisfaction
- After resolving a challenging situation
- Following a smooth transaction experience

**Poor Timing:**
- Immediately after seeing property
- During contract negotiations
- When issues are unresolved
- Before closing is complete

### Where to Collect Testimonials

**Google Business Profile:**
- Most visible and influential
- Impacts local SEO rankings
- Shows up in search results
- Verified and trustworthy

**Zillow/Realtor.com:**
- Industry-specific platforms
- High real estate buyer visibility
- Integrated with agent profiles
- Searchable by consumers

**Facebook Reviews:**
- Social proof on social media
- Shareable content
- Broad audience reach
- Easy for clients to leave

**Website Testimonials:**
- Full control over display
- Can showcase with photos
- Include in case studies
- Use in video testimonials

**LinkedIn Recommendations:**
- Professional credibility
- B2B relationship building
- Network visibility
- Career development

### Testimonial Request Best Practices

**Make It Easy:**
- Provide direct links
- Offer multiple platform options
- Pre-write draft if helpful
- Send clear instructions
- Make it mobile-friendly

**Be Specific:**
- Ask for details about experience
- Request mention of specific services
- Encourage specific results
- Suggest including emotions/feelings

**Personalize Request:**
- Reference specific transaction
- Mention personal details
- Acknowledge their experience
- Express genuine appreciation

**Follow Up Professionally:**
- Send gentle reminder after 3-5 days
- Offer assistance if needed
- Thank them regardless
- Don't be pushy or demanding

### Effective Testimonial Request Templates

**Email Template (Post-Closing):**
Subject: Quick Favor - Share Your Experience?

Hi [Client Name],

Congratulations again on closing on [Property Address]! It was truly a pleasure helping your family find the perfect home.

If you were happy with my service, would you mind taking 2 minutes to share your experience? Your feedback helps other families make confident decisions when choosing an agent.

You can leave a review here:
[Google Review Link]
[Zillow Review Link]

Thank you so much for your trust and for allowing me to be part of this exciting milestone!

Best regards,
[Your Name]

**Text Message Template:**
Hi [Client Name]! Congrats again on your new home! 🏡 If you were happy with my service, I'd really appreciate a quick Google review. It helps other families choose the right agent. Here's the link: [link]. Thank you! 😊

**Facebook Post Request:**
[Client Name], thank you for trusting me with your home [purchase/sale]! If you're happy with how everything went, I'd love if you could share your experience on my Facebook page or Google. Your words mean the world and help other families feel confident choosing an agent. [Links]

**LinkedIn Request:**
Hi [Client Name],

I wanted to reach out and thank you again for the opportunity to assist with [transaction]. It was great working with you!

If you felt my service added value, I would greatly appreciate a LinkedIn recommendation highlighting your experience. Recommendations from clients like you help me grow my business and serve more families.

Thank you for considering!
[Your Name]

### Responding to Testimonials

**Positive Reviews:**
- Thank them publicly
- Be specific about what you appreciate
- Reinforce the relationship
- Share the review (with permission)

Example: "Thank you so much, [Name]! It was an absolute pleasure helping you find your dream home. Wishing you many happy years there!"

**Negative Reviews:**
- Respond promptly and professionally
- Acknowledge their concerns
- Offer to resolve offline
- Never argue or get defensive

Example: "I'm sorry to hear about your experience, [Name]. I'd like to discuss this and make things right. Please contact me directly at [phone/email]."

### Maximizing Testimonial Impact

**Showcase Strategically:**
- Homepage featured testimonials
- Dedicated testimonials page
- Social media quote graphics
- Email signature rotation
- Listing presentation slides

**Video Testimonials:**
- Record willing clients on phone
- Create professional video packages
- Share on YouTube and social media
- Use in listing presentations
- Extremely powerful credibility

**Case Studies:**
- Combine testimonials with results
- Tell the full story
- Include before/after details
- Demonstrate problem-solving
- Show transformation

**Incentivize Ethically:**
- Charitable donations for reviews
- Small appreciation gifts after (not before)
- Never pay for positive reviews
- Maintain authenticity
- Follow NAR ethics guidelines

### Review Management System

**Tracking System:**
- Spreadsheet of clients and review status
- Set reminders for follow-ups
- Track which platforms
- Monitor response rates
- Note outstanding requests

**Automation:**
- Email templates saved
- CRM automated sequences
- Review request tools
- Reminder systems
- Thank you automation

**Monitoring:**
- Set up Google Alerts
- Regular platform checks
- Respond within 24 hours
- Address negative quickly
- Celebrate positive reviews

### Legal and Ethical Considerations

**NAR Code of Ethics:**
- Must be genuine and unsolicited
- Cannot pay for positive reviews
- Must disclose relationships
- Cannot suppress negative reviews
- Must be truthful and accurate

**FTC Guidelines:**
- Disclose material connections
- Cannot fake reviews
- Must be based on real experiences
- Cannot compensate for reviews
- Transparency required

## How to Use This Generator

Enter your client information:
1. Client name
2. Property address
3. Transaction type (buy/sell)
4. Closing date
5. Preferred communication method
6. Specific service highlight

Get customized request messages for:
- Professional email template
- Casual text message
- Social media request
- LinkedIn recommendation request
- Follow-up reminder message
- Thank you response template

This generator helps you request testimonials professionally and consistently, building a strong portfolio of social proof that attracts more clients to your real estate business.
`,
  },
  calculator: {
    fields: [
      {
        name: 'clientName',
        label: 'Client Name',
        type: 'text',
        defaultValue: 'John & Sarah Smith',
      },
      {
        name: 'transactionType',
        label: 'Transaction Type',
        type: 'text',
        defaultValue: 'Home Purchase',
      },
      {
        name: 'daysAgo',
        label: 'Days Since Closing',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'reviewPlatform',
        label: 'Target Review Platform',
        type: 'text',
        defaultValue: 'Google',
      },
      {
        name: 'communicationMethod',
        label: 'Communication Method',
        type: 'text',
        defaultValue: 'Email',
      },
    ],
    results: [
      { label: 'Request Timing', isCurrency: false },
      { label: 'Recommended Platform', isCurrency: false },
      { label: 'Communication Channel', isCurrency: false },
      { label: 'Follow-Up Timing', isCurrency: false },
      { label: 'Success Probability', isCurrency: false },
    ],
    calculate: (data) => {
      const { clientName, transactionType, daysAgo, reviewPlatform, communicationMethod } = data;
      
      const days = parseFloat(daysAgo);
      const timing = days <= 3 ? 'Optimal (within 3 days)' :
                     days <= 7 ? 'Good (within 1 week)' :
                     days <= 14 ? 'Acceptable (within 2 weeks)' : 'Consider personal call first';
      
      const platform = reviewPlatform || 'Google';
      const method = communicationMethod || 'Email';
      const followUp = days <= 3 ? 'Send reminder in 5 days' :
                       days <= 7 ? 'Send reminder in 3 days' : 'Follow up within 2 days';
      
      const probability = days <= 3 ? '75-85%' :
                         days <= 7 ? '60-70%' :
                         days <= 14 ? '40-50%' : '20-30%';
      
      return [
        { label: 'Request Timing', value: timing },
        { label: 'Recommended Platform', value: platform },
        { label: 'Communication Channel', value: method },
        { label: 'Follow-Up Timing', value: followUp },
        { label: 'Success Probability', value: probability },
      ];
    },
  },
};
