import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "What does beta access include?",
  answer: "Beta users get full access to all current features, priority support, special early-bird pricing, and direct influence on our product roadmap. You'll be among the first to test new features and provide feedback that shapes the platform's development."
}, {
  question: "How does the smart scraper work?",
  answer: "Our intelligent scraper analyzes your website structure and automatically extracts property listings, images, and details. It handles various website formats and can be configured to match your specific site structure. The process is completely automated and runs in the background."
}, {
  question: "Can I customize the AI-generated content?",
  answer: "Absolutely! You have full control over the AI optimization. You can choose to enhance existing descriptions, completely rewrite them, or use AI suggestions as a starting point for manual editing. The AI learns from your preferences to improve future suggestions."
}, {
  question: "Which platforms can I export to?",
  answer: "We support 50+ platforms including ImmoScout24, FARAWAYHOME, Rightmove, Zoopla, Airbnb, Booking.com, and many more. You can also export to your own website via API or webhook integrations. New platforms are added regularly based on customer requests."
}, {
  question: "Is my data secure?",
  answer: "Yes, security is our top priority. We use bank-grade encryption, SOC 2 compliance, and store all data in secure, geographically distributed data centers. Your property data is never shared with third parties and you maintain full ownership and control."
}, {
  question: "How does pricing work with multiple listings?",
  answer: "Our pricing is based on the number of active listings you manage. You can easily upgrade or downgrade your plan as your portfolio grows or shrinks. There are no setup fees or long-term contracts, and you only pay for what you use."
}, {
  question: "Do you offer API access?",
  answer: "Yes, we provide comprehensive REST APIs for all Pro plans and above. This allows you to integrate Leasy with your existing property management software, CRM systems, or custom applications. Full API documentation and support are included."
}, {
  question: "How quickly are listings synchronized?",
  answer: "Real-time synchronization happens within minutes of making changes. You can also schedule bulk updates during off-peak hours. Our system processes thousands of listing updates per minute with 99.9% uptime reliability."
}, {
  question: "Can I try the beta version?",
  answer: "Definitely! We're currently in beta phase with limited access. Join our waitlist to get early access and help shape the product. Beta users get special early-bird pricing and direct input into our development roadmap."
}];
export const FAQ = () => {
  return <section id="faq" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about Leasy
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-card border border-border/50 rounded-lg px-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>

          {/* Contact CTA */}
          
        </div>
      </div>
    </section>;
};