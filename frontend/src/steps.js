export const categories = [
  { value: "Gaming", label: "Gaming", trigger: "16" },
  { value: "Messaging", label: "Messaging", trigger: "13" },
  { value: "Industry", label: "Industry", trigger: "14" },
  { value: "Monetization", label: "Monetization", trigger: "15" },
]

export const chatbotsteps =[
    {
      id: 1,
      message: "Good day!",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 2,
      end: false,
      validation:false,
      validationtype:null,


    },
    {
      id: 2,
      message:
        "Welcome to MontyMobile,a leading VAS & telecom solutions provider and an international SMS wholesale intermediary hub. MontyMobile includes a wide range of Fintech,Data Monetixation,loT and Mobile Advertising solutions.",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 3,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 3,
      message: "Please enter your name",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 4,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 4,
      message: null,
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: true,
      trigger: 5,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 5,
      message: "Welcome ",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 6,
      end: false,
      previousvalue:true,
      validation:false,
      validationtype:null,



    },
    {
      id: 6,
      message: "Please enter your email",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 7,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,
      validation:false,
      validationtype:null,
    },
    {
      id: 7,
      message: null,
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: true,
      trigger: 8,
      end: false,
      previousvalue:false,
      validation:true,
      validationtype:"email",
    },
    {
      id: 8,
      message: "Please enter your phonenumber",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 9,
      end: false,
      previousvalue:false,
      previousvalue:false,
      validation:false,
      validationtype:null,
    },
    {
      id: 9,
      message: null,
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: true,
      trigger: 10,
      end: false,
      previousvalue:false,

      validation:true,
      validationtype:"phone",



    },
    {
      id: 10,
      message: "Choose your favorite interests",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 11,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 11,
      message: null,
      componentboolean: true,
      customcomponent: "categories",
      options: null,
      user: false,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: "Messaging",
      message: "Choose your favorite Messaging categories",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 12,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: "Gaming",
      message: "Choose your favorite Gaming categories",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 13,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: "Industry",
      message: "Choose your favorite Industry categories",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 14,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: "Monetization",
      message: "Choose your favorite Monetization categories",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 15,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 12,
      message: null,
      componentboolean: true,
      customcomponent: "interests",
      options: [
        { value: "SMS", label: "SMS", trigger: "18" },
        { value: "Whatsapp", label: "Whatsapp", trigger: "18" },
        { value: "Telegram", label: "Telegram", trigger: "18" },
        { value: "Chatbot", label: "Chatbot", trigger: "18" },
        { value: "Viber", label: "Viber", trigger: "18" },
        { value: "Line", label: "Line", trigger: "18" },
        { value: "Messenger", label: "Messenger", trigger: "18" },
        { value: "LiveChat", label: "LiveChat", trigger: "18" },
        {
          value: "Verified SMS",
          label: "Verified SMS",
          trigger: "18",
        },
        { value: "USSD", label: "USSD", trigger: "18" },
      ],
      user: false,
      trigger: 16,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 13,
      message: null,
      componentboolean: true,
      customcomponent: "interests",
      options: [
        {
          value: "Cloud Gaming",
          label: "Cloud Gaming",
          trigger: "18",
        },
        {
          value: "Monty Studios",
          label: "Monty Studios",
          trigger: "18",
        },
        {
          value: "Gaming Portal",
          label: "Gaming Portal",
          trigger: "18",
        },
      ],
      user: false,
      trigger: 16,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 14,
      message: null,
      componentboolean: true,
      customcomponent: "interests",
      options: [
        {
          value: "Financial Services",
          label: "Financial Services",
          trigger: "18",
        },
        { value: "Hospitality", label: "Hospitality", trigger: "18" },
        { value: "Telco", label: "Telco", trigger: "18" },
        { value: "Retail", label: "Retail", trigger: "18" },
        { value: "Tourism", label: "Tourism", trigger: "18" },
        { value: "Real Estate", label: "Real Estate", trigger: "18" },
        { value: "AutoMobile", label: "AutoMobile", trigger: "18" },
        { value: "Health Care", label: "Health Care", trigger: "18" },

      ],
      user: false,
      trigger: 16,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 15,
      message: null,
      componentboolean: true,
      customcomponent: "interests",
      options: [
        {
          value: "SMS Monetization",
          label: "SMS Monetization",
          trigger: "18",
        },
        {
          value: "SMS Firewall",
          label: "SMS Firewall",
          trigger: "18",
        },
        { value: "P2P SMS", label: "P2P SMS", trigger: "18" },
        { value: "P2A SMS", label: "P2A SMS", trigger: "18" },
        {
          value: "Flash Call Solution",
          label: "Flash Call Solution",
          trigger: "18",
        },
        {
          value: "Digital Verification Suite",
          label: "Digital Verification Suite",
          trigger: "18",
        },
      ],
      user: false,
      trigger: 16,
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 16,
      message: "Do you have other interests",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: 17,
      end: false,
      previousvalue:false,
      validation:false,


    },
    {
      id: 17,
      message: null,
      componentboolean: true,
      customcomponent: "yesno",
      options: [],
      user: false,
      //if yes call step of another interests if no call step of bye
      end: false,
      previousvalue:false,
      validation:false,
      validationtype:null,



    },
    {
      id: 18,
      message: "Great! We will contact you soon",
      componentboolean: false,
      customcomponent: null,
      options: null,
      user: false,
      trigger: null,
      end: true,
      previousvalue:false,
      validation:false,
      validationtype:null,
    },
  ]