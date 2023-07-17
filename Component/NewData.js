export const experienceData = [
  {
    category: "Functional",
    categoryVal: [
      {
        sub_cat_val: "Performance",
        Parameter: [
          {
            usability_key: "Page Load Speed",
            contentVal: `Loading Speed (less than 3 sec to prevent high bounce rate)
                53% of mobile users leave a website that takes longer than three seconds to load.
                `,
          },
        ],
      },
      {
        sub_cat_val: "Responsiveness",
        Parameter: [
          {
            usability_key: "Mobile Responsive Design",
            contentVal: `Navigation is responsive and adapts well to mobile screens`,
          },
        ],
      },
      {
        sub_cat_val: "Compliance",
        Parameter: [
          {
            usability_key: "SSL Certificate",
            contentVal: `Navigation is responsive and adapts well to mobile screens`,
          },
          {
            usability_key: "PCI-DSS Compliance",
            contentVal:
              "If the site handles Credit cards (no 3rd party payment partner),  it should be PCI DSS compliant       ",
          },
          {
            usability_key: "GDPR Compliance",
            contentVal:
              "If operating  in the European Union (EU) or handle EU customer data, ensure compliance with GDPR regulations. Obtain user consent for data collection and processing.       ",
          },
          {
            usability_key: "Taxes Compliance",
            contentVal:
              "calculate and collect the appropriate sales tax during the checkout process.       ",
          },
          {
            usability_key: "Cookie Consent",
            contentVal:
              "Provides clear information about the types of cookies used, their purpose, and obtains user consent before placing non-essential cookies      ",
          },
        ],
      },
      {
        sub_cat_val: "Search",
        Parameter: [
          {
            usability_key: "Autocomplete",
            contentVal: "Allow auto completion of search query ",
          },
          {
            usability_key: "Typotolerance",
            contentVal: "Handles spelling errors/typo in search query",
          },
          {
            usability_key: "No result page optimisation",
            contentVal:
              "No search result page is not a dead end  - has recommendations or synonym results",
          },
          {
            usability_key: "Search Box",
            contentVal:
              "Clear and Prominent Search Bar (header or at a visible location) & Mobile Optimized",
          },
          {
            usability_key: "Search Result",
            contentVal: "Accurate and Relevant Results",
          },
          {
            usability_key: "Search Result-accuracy",
            contentVal:
              "Ensure that the search function can handle a high volume of queries without delays - Lazy Load, Pagination ",
          },
          {
            usability_key: "Search Result - Filter/Sort",
            contentVal: "Relevant Filter and Sorting available",
          },
          {
            usability_key: "Search Result - Info",
            contentVal: "Relevant Product Info and CTA on product tile",
          },
        ],
      },
      {
        sub_cat_val: "Navigation",
        Parameter: [
          {
            usability_key: "Breadcrumbs",
            contentVal:
              "Clear Hierarchy and Breadcrumb Navigation (trail of their location and allow easy navigation back to previous levels)",
          },
          {
            usability_key: "Category Hierarchy",
            contentVal: "Handles spelling errors/typo in search query",
          },
          {
            usability_key: "Sub Category",
            contentVal:
              "Should avoid too many nested categories.Aim for at least 10 products in the categories at the deepest level.No search result page is not a dead end  - has recommendations or synonym results",
          },
        ],
      },
      {
        sub_cat_val: "Content",
        Parameter: [
          {
            usability_key: "Blogs",
            contentVal:
              "Sharable - engaging, educational content aligning to target segments interest and need",
            child_val: "BLOGS",
          },
          {
            usability_key: "Gift Guides/Curated Magazines",
            contentVal:
              "Themed gift guides or curated collections as magazine that feature a selection of products suited for specific occasions, target audiences, or interests. ",
            child_val: "GIFT_GUIDE",
          },
          {
            usability_key: "Quiz",
            contentVal: "Interactive Content",
            child_val: "QUIZ",
          },
          {
            usability_key: "Social Posts",
            contentVal:
              "Showcase social media posts from users on website with tagged products",
            child_val: "SOCIAL_POSTS",
          },

          {
            usability_key: "Videos",
            contentVal:
              "Sharable - engaging, educational content (tutorial) aligning to target segments interest and need",
            child_val: "VIDEOS",
          },
        ],
      },
      {
        sub_cat_val: "Community Engagement",
        Parameter: [
          {
            usability_key: "Forum Conversations",
            contentVal:
              "Product mentions and conversations in discussion forum",
            child_val: "FORUM_ENGAGEMENT",
          },
          {
            usability_key: "Blog Comments",
            contentVal: "User engagement as Blog comments",
            child_val: "BLOG_COMMENTS",
          },
          {
            usability_key: "Influencer Collab",
            contentVal: "Influencer posts and product reviews",
            child_val: "INFLUENCER_COLLAB",
          },
          {
            usability_key: "Expert Content",
            contentVal: "Expert Content - Article/Video",
            child_val: "EXPERT_CONTENT",
          },

          {
            usability_key: "Expert Engagement",
            contentVal: "Expert Connect - Message/Live Video appointment",
            child_val: "EXPERT_ENGAGEMENT",
          },
        ],
      },
      {
        sub_cat_val: "Product Listing",
        Parameter: [
          {
            usability_key: "Universal Atrributes 1",
            contentVal:
              "Name - Concise names that contain important and meaningful product characteristics Price Images - Photos large enough to identify a known item and show differences between items Variation - Indication of other available colors/size/style",
            child_val: "UNIVERSAL_ATTRIBUTES",
          },
          {
            usability_key: "Next Level Attributes ",
            contentVal:
              "Ratingsavailabilty Info Icons/Badges to mark as New, On Sale, Best Seller Alternate Images on hover",
            child_val: "NEXT_LVL_ATTRIBUTE",
          },
          {
            usability_key: "Contextual Image",
            contentVal:
              "The product photos match any user-selected filters or search query (in case of variation if user searched for red dress show the red variation image on the list page)",
            child_val: "CONTEXTUAL_IMAGE",
          },
          {
            usability_key: "CTAs",
            contentVal: "Add to Cart, Add to Wishlist, Quick View",
            child_val: "CTAS",
          },

          {
            usability_key: "Optimize Information density",
            contentVal:
              "The number of Products Listed on the page should not be too much resulting in clutter and slow page load. (Lazy load/Show more options)",
            child_val: "OPTIMIZE_INFORMATION",
          },
        ],
      },
      {
        sub_cat_val: "Product Filter /Sorting ",
        Parameter: [
          {
            usability_key: "Category Specific Filters",
            contentVal: "Provide category specific filters",
            child_val: "PRODUCT_SORTING",
          },

          {
            usability_key: "Edit Filters",
            contentVal:
              "Allow user to view selected filters, change filters, remove filter",
            child_val: "EDIT_FILTER",
          },
          {
            usability_key: "Multi filter selection",
            contentVal: "Allow selection of multi filter values",
            child_val: "MULTI_FILTER",
          },
        ],
      },
      {
        sub_cat_val: "Product Detail Page",
        Parameter: [
          {
            usability_key: "Product Image",
            contentVal:
              "Multiple high-resolution product images that help users assess the product's details, texture, and color accurately for all variants ",
            child_val: "PRODUCT_IMAGE",
          },
          {
            usability_key: "Product Image",
            contentVal: "Zoom, 360 degree rotate,  ",
            child_val: "PRODUCT_IMAGE_ROTATE",
          },
          {
            usability_key: "Product Description",
            contentVal:
              "Product description in a concise and easily scannable format.Clear Shipping, Delivery and Return Information (Provide details on delivery methods, tracking options, and any restrictions or limitations) ",
            child_val: "PRODUCT_DESCRIPTION",
          },
          {
            usability_key: "Product Video /Supplement Content",
            contentVal:
              "There are supplement content that aids with the buying decision - eg Video, Guides, Instructions etc ",
            child_val: "PRODUCT_VIDEO",
          },
          {
            usability_key: "Reviews & Ratings displayed for products ",
            contentVal:
              "Product Reviews**** not significant for D2C Brands. For D2C customers rely on off-site review content for making their purchase decision.",

            child_val: "PRODUCT_REVIEW",
          },
          {
            usability_key: "Inventory Status",
            contentVal:
              "Clearly indicate the product's availability status, such as In Stock,Out of Stock, or Pre-Order. ",
            child_val: "INVENTORY_STATUS",
          },
          {
            usability_key: "Size Guide** (Specific to Category)",
            contentVal: " ",
            child_val: "SIZE_GUIDE",
          },
          {
            usability_key: "CTA",
            contentVal:
              "Add to Cart, Save for later (wishlist) is placed on the top fold ",
            child_val: "CTA",
          },
        ],
      },
      {
        sub_cat_val: "Price",
        Parameter: [
          {
            usability_key: "Price ",
            contentVal:
              "Clear display of the price and offer price, locating them closely together ",
            child_val: "PRICE",
          },
        ],
      },
      {
        sub_cat_val: "Promotions",
        Parameter: [
          {
            usability_key: "Promo display ",
            contentVal:
              "Display applied promotion/discount in the shopping cart",
            child_val: "PROMOTION",
          },
          {
            usability_key: "Savings Display ",
            contentVal:
              "Display savings and discount applied in the final Payment Page",
            child_val: "SAVING_DISPLAY",
          },
          {
            usability_key: "Promo display ",
            contentVal: "Display product specific promotions on PLP & PDP",
            child_val: "PROMO_DISPLAY",
          },
        ],
      },
      {
        sub_cat_val: "Cart",
        Parameter: [
          {
            usability_key: "Cart visibility",
            contentVal: "Easy to access and prominently placed on the site",
          },
          {
            usability_key: "Edit Cart",
            contentVal: "Easy to update - remove, edit  quantity  ",
          },
          {
            usability_key: "Display Savings",
            contentVal: "Display savings for each item",
          },
          {
            usability_key: "Wishlist",
            contentVal: "Save it for later/wishlist option",
          },
          {
            usability_key: "Persistent Cart",
            contentVal:
              "Retains the items in the cart even after the user has left and is available across devices the next time user accesses the site. ",
          },
        ],
      },
      {
        sub_cat_val: "Checkout",
        Parameter: [
          {
            usability_key: "Payment ",
            contentVal: "Allows Multiple payment methods",
          },
          {
            usability_key: "Optimized Checkout ",
            contentVal: "Not more than 8 fields to enter",
          },
          {
            usability_key: "Zipcode detection",
            contentVal:
              "Allows Zipcode detection (auto populates state & city)",
          },

          {
            usability_key: "Inline Validation",
            contentVal:
              "Implement inline validation to provide immediate feedback to users as they fill out the customer and address information forms",
          },

          {
            usability_key: "Guest Checkout",
            contentVal: "Allows Guest Checkout",
          },
          {
            usability_key: "Progress Bar",
            contentVal: "Progress bar for checkout progress",
          },
          {
            usability_key: "Auto fill address",
            contentVal: "Autofill of saved address and details from My account",
          },
        ],
      },
      {
        sub_cat_val: "My Account",
        Parameter: [
          {
            usability_key: "Account Creation",
            contentVal: "Remember me option for passsword",
          },
        ],
      },
      {
        sub_cat_val: "Customer Support",
        Parameter: [
          {
            usability_key: "24/7 Quick support/reach",
            contentVal: "Digital first customer Service (Chat Bot /WhatsApp)",
          },
          {
            usability_key: "Self Support",
            contentVal: "Relevant FAQs Available",
          },
        ],
      },
      {
        sub_cat_val: "Order Tracking",
        Parameter: [
          {
            usability_key: "Order Summary",
            contentVal:
              "All order-related information are on one single order page",
          },
          {
            usability_key: "Order Tracking",
            contentVal:
              "Provides a single seamless order-tracking experience, without any “unavailable states”(56% of sites don’t integrate all tracking information and events within the site)",
          },
        ],
      },
      {
        sub_cat_val: "Returns & Refunds",
        Parameter: [
          {
            usability_key: "Status",
            contentVal:
              "Timely and accurate updates on the progress of a return/refund",
            child_val: "PROMOTION",
          },
          {
            usability_key: "Information",
            contentVal:
              "Return and refund policy information easily accessible",
            child_val: "SAVING_DISPLAY",
          },
        ],
      },
    ],
  },
  {
    category: "Aesthetics",
    categoryVal: [
      {
        sub_cat_val: "Visual Hierarchy",
        Parameter: [
          {
            usability_key: "Font Hierarchy",
            contentVal: `A clear information hierarchy by organizing content based on its importance (Font hierarchy, Color Contrast)`,
          },
        ],
      },
      {
        sub_cat_val: "Layout Consistency",
        Parameter: [
          {
            usability_key: "Cohesive Visual Structure",
            contentVal: `Consistency in spacing, alignment, and proportions helps create a cohesive and organized visual structure.`,
          },
        ],
      },
      {
        sub_cat_val: "Sensory Appeal",
        Parameter: [
          {
            usability_key: "Visual Complexity",
            contentVal: `Humans are hard-wired for visual input, and users’ first impressions typically form in 50 milliseconds.`,
          },
        ],
      },
      {
        sub_cat_val: "Micro Moments",
        Parameter: [
          {
            usability_key: "Micro Copies",
            contentVal: `Consistent micro copies to welcome customer, guide during the shopping journey, progress verification, minimize error `,
          },
          {
            usability_key: "Micro Graphics",
            contentVal: `Micrographics are additional elements that can create a story tellings or highlight promotions / warnings / extra messages like badges on product tiles best seller/Sold out/ 5 left.`,
          },
          {
            usability_key: "Visual feedback-Buttons",
            contentVal: `Button animations that provide visual feedback when a user clicks.`,
          },
          {
            usability_key: "Tooltips",
            contentVal: `Tooltips that provide additional information when a user hovers over an element.`,
          },
          {
            usability_key: "Progress Bar",
            contentVal: `Progress bars show the user how much progress they have made in completing a task.`,
          },
          {
            usability_key: "Visual feedback - Success",
            contentVal: `microinteraction that celebrates a user’s accomplishment.`,
          },
        ],
      },
    ],
  },
  {
    category: "Emotional Experience",
    categoryVal: [
      {
        sub_cat_val: "Love",
        Parameter: [
          {
            usability_key: "Personalized Recommendations",
            contentVal: `Recommnedation based on user purchase history/preference`,
          },
          {
            usability_key: "Personalized Email Communication",
            contentVal: `Email discount/reminder for abandoned cart`,
          },
          {
            usability_key: "Personalized Newsletter",
            contentVal: `Personalized Newsletter based on customer segment`,
          },
          {
            usability_key: "Personalized Website Content",
            contentVal: `Dynamic Banners, Content based on user segment, preferences, purchase history`,
          },
          {
            usability_key: "Customer Support - Customer Context",
            contentVal: `Historical Context: Access customer history and previous interactions to provide personalized support. `,
          },
          {
            usability_key: "Customer Support - Proactive support",
            contentVal: `Proactive Support - Anticipate customer needs and provide proactive assistance`,
          },
        ],
      },
      {
        sub_cat_val: "Trust",
        Parameter: [
          {
            usability_key: "Brand Authenticity",
            contentVal: `No Photoshooped Images/Product Images are closest to reality`,
          },
          {
            usability_key: "Brand Message - Story",
            contentVal: `Brand Story communicated on Home Page`,
          },
          {
            usability_key: "Brand Message - Consistency",
            contentVal: `Consistency of brand message across channels`,
          },
          {
            usability_key: "Pricing Transparancy",
            contentVal: `Transparency in Pricing  (no hidden costs)`,
          },
          {
            usability_key: "Social Proof - Ratings/Reviews",
            contentVal: `Showcase customer reviews, ratings, and testimonials to provide social proof`,
          },
          {
            usability_key: "Social Proof - Social Posts",
            contentVal: `Showcase Social UGC from Social Media on the site `,
          },
          {
            usability_key: "Data Privacy & Security",
            contentVal: ` Clearly communicates data privacy and security measures to customers.`,
          },
        ],
      },
      {
        sub_cat_val: "Fun",
        Parameter: [
          {
            usability_key: "Interactivity",
            contentVal: `Interactive UX elements - Scratch cards, spin to win, Polls, Quiz`,
          },
          {
            usability_key: "Points/Rewards/Badges",
            contentVal: `Customer is rewarded for various actions - purchases, referrals, UGC, Social Share`,
          },
          {
            usability_key: "Interactive Product Page",
            contentVal: `Virtual Try On, 360 degree view, Zoom`,
          },
          {
            usability_key: "Brand Responsiveness",
            contentVal: `Real time response - Whatsapp, Email, Social Media, Chat`,
          },
          {
            usability_key: "Community responsiveness",
            contentVal: `Forum comments, Notifications, `,
          },
        ],
      },
    ],
  },
  {
    category: "Experience of Meaning",
    categoryVal: [
      {
        sub_cat_val: "Inclusivity",
        Parameter: [
          {
            usability_key: "Accessibility",
            contentVal: `Keyboard Navigation`,
          },
          {
            usability_key: "Diversity in Offerings",
            contentVal: `Inclusive in product offerings - inclusive with Colour/Size variants,  Dietery restrictions (gluten free/vegan)`,
          },
          {
            usability_key: `Multi Currency`,
            contentVal: "Site with localized flavor - currency/language",
          },
          {
            usability_key: "Branding ",
            contentVal: `Diversity/Inclusive Imagery used across the site`,
          },
        ],
      },

      {
        sub_cat_val: "Social Consciousness",
        Parameter: [
          {
            usability_key: "Social Responsibilty Initiatives",
            contentVal: `Highlight your commitment to making a positive impact beyond your business operations.`,
          },
        ],
      },

      {
        sub_cat_val: "Environmental Consciousness",
        Parameter: [
          {
            usability_key: "Sustainabiltle Products",
            contentVal: `Highlight your commitment to making a positive impact beyond your business operations.`,
          },
          {
            usability_key: "Carbon Foot Print Reduction Initiatives",
            contentVal: `Green Packaging : Eco friendly Packaging, Optimizing Shipping space and packaging size.`,
          },
          {
            usability_key: "Social Responsibilty Initiatives",
            contentVal: `Highlight your commitment to making a positive impact beyond your business operations.`,
          },
          {
            usability_key: "Sustainabilty Filters/Icons/Badges",
            contentVal: `Allow user to filter products for sustainabilty features.`,
          },
          {
            usability_key: "Carbon offsetting/ Carbon Neutral Commitment",
            contentVal: `Partner with organizations that specialize in carbon offsetting programs.`,
          },
          {
            usability_key: "Supply Chain Transparency",
            contentVal: `Offers visibility into your supply chain by sharing information about the journey of your products from production to delivery.`,
          },
          {
            usability_key: "Ethical Sourcing",
            contentVal: `Share information about suppliers, certifications, and any efforts brnad  make to reduce environmental impact or support social causes.`,
          },
        ],
      },
      {
        sub_cat_val: "Empowerment/ Self Development",
        Parameter: [
          {
            usability_key: "Goal Tracking/Progress Monitoring",
            contentVal: `Allows tracking and sharing progress (example - fitness level, Courses Taken etc).`,
          },
        ],
      },
      {
        sub_cat_val: "Belonging",
        Parameter: [
          {
            usability_key: "Online Community",
            contentVal: `Involve customers in co-creating products, seeking input on new designs, or involving them in charitable endeavors. .`,
          },
          {
            usability_key: "Co - Create",
            contentVal: `Allows tracking and sharing progress (example - fitness level, Courses Taken etc).`,
          },
          {
            usability_key: "Exclusive Offline/Online Events",
            contentVal: `Host exclusive events, webinars, or workshops for your customers.`,
          },
          {
            usability_key: "Brand Advocacy",
            contentVal: `Brand advocacy programs that empower the most engaged customers to become brand advocates, providing them with exclusive perks, early access to new releases, and opportunities to share their experiences and refer new customers.`,
          },
          {
            usability_key: "Customer Spotlight",
            contentVal: `Highlight and feature individual customers or their success stories on your website, blog, or social media.`,
          },
          {
            usability_key: "Loyality Programs",
            contentVal: `Milestone celebrations - Personalized for the customer's preferences.`,
          },
          {
            usability_key: "Guest Blog ",
            contentVal: `Allow guest blog content submissions.`,
          },
          {
            usability_key: "Forum Moderation",
            contentVal: `Allow users to be forum moderators and group leaders.`,
          },
        ],
      },

      {
        sub_cat_val: "Human Centered Technology",
        Parameter: [
          {
            usability_key: "Ethical Persuation",
            contentVal: `Disguised ads: This is when an ad is disguised as a regular product listing.`,
          },
        ],
      },
    ],
  },
];
