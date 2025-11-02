import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    // In a real application, you would use a service like OpenAI or a local model
    // to generate the article based on the prompt.
    // For this example, we'll return a mock article.

    const mockArticle = `
**A Prime Investment Opportunity: ${prompt.split("at ")[1].split(".")[0]}**

This stunning property, located at ${prompt.split("at ")[1].split(".")[0]}, presents a unique opportunity for homebuyers and investors alike. With an estimated value of ${prompt.split("is ")[1].split(".")[0]}, this home offers exceptional value in a thriving market.

**Property Highlights:**

*   **Spacious Living:** Boasting ${prompt.split("has ")[1].split(" bedrooms")[0]} bedrooms and ${prompt.split("and ")[1].split(" bathrooms")[0]} bathrooms, this ${prompt.split("total of ")[1].split(" square")[0]} sq. ft. home provides ample space for comfortable living.
*   **Modern Amenities:** The property is equipped with modern amenities and features that cater to a contemporary lifestyle.

**Investment Potential:**

With an estimated monthly rent of ${prompt.split("rent is ")[1].split(",")[0]} and a potential annual cash flow of ${prompt.split("flow of ")[1].split(".")[0]}, this property is a lucrative investment. The strong rental market in the area ensures a steady stream of income for savvy investors.

**Conclusion:**

Whether you're looking for a dream home or a profitable investment, this property is a must-see. Its combination of location, features, and financial potential makes it a standout choice in today's real estate market.
`

    return NextResponse.json({ article: mockArticle })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to generate article' }, { status: 500 })
  }
}