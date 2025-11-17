import { CalculatorContent } from '@/types';

export const LOVE_LETTER_TO_SELLER_GENERATOR_CONTENT: CalculatorContent = {
  title: 'Love Letter to Seller Generator',
  description: 'Generate a heartfelt personalized letter to sellers that helps your offer stand out',
  icon: '💌',
  category: 'Buyer Tools',
  slug: 'love-letter-to-seller-generator',
  metaTitle: 'Love Letter to Seller Generator | Stand Out with Your Offer',
  metaDescription: 'Create a compelling, personalized letter to home sellers. Make an emotional connection that helps your offer stand out in competitive markets.',
  article: {
    title: "The Power of a Well-Written Offer Letter",
    content: `
    <h2>What is a Love Letter to a Seller?</h2>
    <p>A love letter (or offer letter) to a seller is a personal note from a buyer expressing why they want to purchase the home. In competitive markets, these letters can differentiate your offer from others and create an emotional connection.</p>
    
    <h3>When Love Letters Work Best</h3>
    <ul>
      <li><strong>Multiple Offer Situations:</strong> When several buyers are competing</li>
      <li><strong>Seller Emotional Attachment:</strong> Long-time homeowners with memories</li>
      <li><strong>Unique Properties:</strong> Homes with character and history</li>
      <li><strong>Similar Price Points:</strong> When offers are financially comparable</li>
    </ul>
    
    <h3>What to Include in Your Letter</h3>
    <ul>
      <li><strong>Personal Introduction:</strong> Who you are, your family composition</li>
      <li><strong>Why This Home:</strong> Specific features that attracted you</li>
      <li><strong>Future Vision:</strong> How you'll enjoy and care for the property</li>
      <li><strong>Respect for the Home:</strong> Acknowledge the seller's time there</li>
      <li><strong>Specific Details:</strong> Reference unique elements of the property</li>
      <li><strong>Genuine Emotion:</strong> Express authentic feelings, not manipulation</li>
    </ul>
    
    <h3>What to AVOID</h3>
    <ul>
      <li><strong>Protected Class Information:</strong> Familial status, race, religion, national origin</li>
      <li><strong>Desperate Tone:</strong> Don't beg or sound overly needy</li>
      <li><strong>Generic Templates:</strong> Avoid copy-paste letters</li>
      <li><strong>Negative Comparisons:</strong> Don't criticize other properties</li>
      <li><strong>Promises You Can't Keep:</strong> Only commit to what you'll do</li>
      <li><strong>Financial Desperation:</strong> Don't reveal you're stretching your budget</li>
    </ul>
    
    <h3>Fair Housing Considerations</h3>
    <p>IMPORTANT: Some states and localities have restricted or banned buyer love letters due to fair housing concerns. These letters can inadvertently reveal protected class information (like family status or religion) that could influence seller decisions unfairly.</p>
    
    <p><strong>Banned or Restricted States/Cities include:</strong></p>
    <ul>
      <li>Oregon (statewide ban effective 2022)</li>
      <li>New Jersey (discouraged by realtor associations)</li>
      <li>California (many localities restricting)</li>
      <li>Check your local regulations before submitting</li>
    </ul>
    
    <h3>Alternative Approaches</h3>
    <p>If love letters are restricted in your area:</p>
    <ul>
      <li>Write about the house itself, not your personal story</li>
      <li>Focus on property features you appreciate</li>
      <li>Describe your home care plans without family details</li>
      <li>Let your strong offer speak for itself</li>
    </ul>
    
    <h3>Best Practices for Love Letters</h3>
    <ul>
      <li><strong>Keep it Brief:</strong> One page maximum</li>
      <li><strong>Be Authentic:</strong> Genuine emotion resonates</li>
      <li><strong>Proofread Carefully:</strong> Errors undermine sincerity</li>
      <li><strong>Include a Photo:</strong> Consider adding a family photo (where permitted)</li>
      <li><strong>Handwrite if Possible:</strong> Adds personal touch</li>
      <li><strong>Timing Matters:</strong> Submit with your offer, not before</li>
    </ul>
    
    <h3>Real-World Impact</h3>
    <p>According to real estate surveys, 60-70% of sellers read buyer letters, and about 30% say letters influenced their decision. However, remember that price, terms, and contingencies still matter most. A great letter won't overcome a weak offer.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "buyerName",
        label: "Your Name(s)",
        type: "text",
        placeholder: "John and Sarah",
        defaultValue: "",
      },
      {
        name: "propertyFeature",
        label: "Favorite Property Feature",
        type: "text",
        placeholder: "The beautiful oak tree in the backyard",
        defaultValue: "",
      },
      {
        name: "futureVision",
        label: "How You'll Enjoy the Home",
        type: "text",
        placeholder: "Hosting family gatherings in the spacious kitchen",
        defaultValue: "",
      },
      {
        name: "connection",
        label: "Personal Connection",
        type: "text",
        placeholder: "We've been searching for a home in this neighborhood for 2 years",
        defaultValue: "",
      },
      {
        name: "respectedAspect",
        label: "What You Respect About the Home",
        type: "text",
        placeholder: "The care and love you've put into maintaining this beautiful property",
        defaultValue: "",
      },
    ],
    results: [
      { label: "Sample Letter", isCurrency: false },
      { label: "Letter Length", isCurrency: false },
      { label: "Tone Assessment", isCurrency: false },
      { label: "Fair Housing Compliance", isCurrency: false },
      { label: "Suggestions", isCurrency: false },
    ],
    calculate: (data: any) => {
      const buyerName = data.buyerName || "[Your Name]";
      const propertyFeature = data.propertyFeature || "[specific feature you love]";
      const futureVision = data.futureVision || "[how you'll enjoy the home]";
      const connection = data.connection || "[your connection to the property]";
      const respectedAspect = data.respectedAspect || "[what you admire]";
      
      const sampleLetter = `Dear Homeowner,

We wanted to take a moment to express how much your home means to us. From the moment we walked through the door, we knew this was the place we've been searching for.

${propertyFeature} immediately caught our attention and captured our hearts. We can already envision ${futureVision}, creating the memories and life we've been dreaming about.

${connection}, and discovering your property felt like finding exactly what we've been hoping for. We recognize ${respectedAspect}, and we promise to continue caring for this wonderful home with the same dedication and love.

This isn't just a house to us—it's our future home, where we plan to build our lives and create lasting memories. We would be honored to become the next stewards of this special place.

Thank you for considering our offer and for the opportunity to potentially call this beautiful home our own.

With sincere appreciation,
${buyerName}`;

      const wordCount = sampleLetter.split(/\s+/).length;
      const lengthAssessment = wordCount > 250 ? "⚠️ TOO LONG - Aim for under 250 words" :
                               wordCount < 100 ? "⚠️ TOO SHORT - Add more personal details" :
                               "✅ PERFECT LENGTH - Concise and meaningful";
      
      const toneAssessment = "💖 WARM & SINCERE - Genuine emotional connection without desperation";
      
      const fairHousingCompliance = "✅ COMPLIANT - No protected class information detected. However, verify local regulations before submitting.";
      
      const suggestions = "Tips: (1) Handwrite for personal touch (2) Include one specific detail about the property (3) Keep under 250 words (4) Proofread carefully (5) Submit with your offer";

      return [
        { label: "Sample Letter", value: sampleLetter, isCurrency: false },
        { label: "Letter Length", value: `${wordCount} words - ${lengthAssessment}`, isCurrency: false },
        { label: "Tone Assessment", value: toneAssessment, isCurrency: false },
        { label: "Fair Housing Compliance", value: fairHousingCompliance, isCurrency: false },
        { label: "Suggestions", value: suggestions, isCurrency: false },
      ];
    },
  },
};
