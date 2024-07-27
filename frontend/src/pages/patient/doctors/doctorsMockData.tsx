export type Doctor = {
    id: string 
    firstName: string
    lastName: string
    address: string
    department: string
    specialization: string
    sex: "Male" | "Female"
    email: string
    contact: string
}

export const doctorsMockData: Doctor[] = [
    {
      id: "D001",
      firstName: "John",
      lastName: "Smith",
      address: "123 Main St, Anytown, USA",
      department: "Cardiology",
      specialization: "Interventional Cardiology",
      sex: "Male",
      email: "john.smith@hospital.com",
      contact: "555-1234"
    },
    {
      id: "D002",
      firstName: "Emily",
      lastName: "Johnson",
      address: "456 Oak Ave, Somewhere, USA",
      department: "Pediatrics",
      specialization: "Neonatology",
      sex: "Female",
      email: "emily.johnson@hospital.com",
      contact: "555-2345"
    },
    {
      id: "D003",
      firstName: "Michael",
      lastName: "Brown",
      address: "789 Elm St, Elsewhere, USA",
      department: "Neurology",
      specialization: "Stroke Medicine",
      sex: "Male",
      email: "michael.brown@hospital.com",
      contact: "555-3456"
    },
    {
      id: "D004",
      firstName: "Sarah",
      lastName: "Davis",
      address: "321 Pine Rd, Nowhere, USA",
      department: "Oncology",
      specialization: "Radiation Oncology",
      sex: "Female",
      email: "sarah.davis@hospital.com",
      contact: "555-4567"
    },
    {
      id: "D005",
      firstName: "David",
      lastName: "Wilson",
      address: "654 Maple Dr, Anystate, USA",
      department: "Orthopedics",
      specialization: "Sports Medicine",
      sex: "Male",
      email: "david.wilson@hospital.com",
      contact: "555-5678"
    },
    {
      id: "D006",
      firstName: "Jessica",
      lastName: "Taylor",
      address: "987 Cedar Ln, Someplace, USA",
      department: "Dermatology",
      specialization: "Cosmetic Dermatology",
      sex: "Female",
      email: "jessica.taylor@hospital.com",
      contact: "555-6789"
    },
    {
      id: "D007",
      firstName: "Robert",
      lastName: "Anderson",
      address: "741 Birch Blvd, Anycity, USA",
      department: "Gastroenterology",
      specialization: "Hepatology",
      sex: "Male",
      email: "robert.anderson@hospital.com",
      contact: "555-7890"
    },
    {
      id: "D008",
      firstName: "Lisa",
      lastName: "Martinez",
      address: "852 Willow Way, Sometown, USA",
      department: "Obstetrics",
      specialization: "Maternal-Fetal Medicine",
      sex: "Female",
      email: "lisa.martinez@hospital.com",
      contact: "555-8901"
    },
    {
      id: "D009",
      firstName: "William",
      lastName: "Garcia",
      address: "963 Spruce St, Othertown, USA",
      department: "Psychiatry",
      specialization: "Child Psychiatry",
      sex: "Male",
      email: "william.garcia@hospital.com",
      contact: "555-9012"
    },
    {
      id: "D010",
      firstName: "Jennifer",
      lastName: "Lee",
      address: "159 Ash Ave, Thisplace, USA",
      department: "Ophthalmology",
      specialization: "Retina Specialist",
      sex: "Female",
      email: "jennifer.lee@hospital.com",
      contact: "555-0123"
    },
    {
      id: "D011",
      firstName: "Thomas",
      lastName: "Harris",
      address: "753 Poplar Pl, Thattown, USA",
      department: "Urology",
      specialization: "Urologic Oncology",
      sex: "Male",
      email: "thomas.harris@hospital.com",
      contact: "555-1122"
    },
    {
      id: "D012",
      firstName: "Maria",
      lastName: "Clark",
      address: "951 Sycamore Dr, Lastcity, USA",
      department: "Endocrinology",
      specialization: "Diabetes Management",
      sex: "Female",
      email: "maria.clark@hospital.com",
      contact: "555-2233"
    },
    {
      id: "D013",
      firstName: "Christopher",
      lastName: "Lewis",
      address: "357 Redwood Rd, Firsttown, USA",
      department: "Pulmonology",
      specialization: "Sleep Medicine",
      sex: "Male",
      email: "christopher.lewis@hospital.com",
      contact: "555-3344"
    },
    {
      id: "D014",
      firstName: "Elizabeth",
      lastName: "Walker",
      address: "246 Sequoia St, Midtown, USA",
      department: "Rheumatology",
      specialization: "Autoimmune Disorders",
      sex: "Female",
      email: "elizabeth.walker@hospital.com",
      contact: "555-4455"
    },
    {
      id: "D015",
      firstName: "Daniel",
      lastName: "Hall",
      address: "135 Fir Ln, Endtown, USA",
      department: "Nephrology",
      specialization: "Dialysis",
      sex: "Male",
      email: "daniel.hall@hospital.com",
      contact: "555-5566"
    },
    {
      id: "D016",
      firstName: "Patricia",
      lastName: "Young",
      address: "864 Alder Ave, Startville, USA",
      department: "Hematology",
      specialization: "Leukemia Treatment",
      sex: "Female",
      email: "patricia.young@hospital.com",
      contact: "555-6677"
    },
    {
      id: "D017",
      firstName: "James",
      lastName: "Wright",
      address: "975 Beech Blvd, Centerburg, USA",
      department: "Allergy and Immunology",
      specialization: "Food Allergies",
      sex: "Male",
      email: "james.wright@hospital.com",
      contact: "555-7788"
    },
    {
      id: "D018",
      firstName: "Linda",
      lastName: "Scott",
      address: "528 Chestnut Ct, Outskirts, USA",
      department: "Emergency Medicine",
      specialization: "Trauma Care",
      sex: "Female",
      email: "linda.scott@hospital.com",
      contact: "555-8899"
    },
    {
      id: "D019",
      firstName: "Richard",
      lastName: "King",
      address: "713 Walnut Way, Suburbia, USA",
      department: "Radiology",
      specialization: "Interventional Radiology",
      sex: "Male",
      email: "richard.king@hospital.com",
      contact: "555-9900"
    },
    {
      id: "D020",
      firstName: "Karen",
      lastName: "Green",
      address: "624 Hickory Hwy, Ruraltown, USA",
      department: "Anesthesiology",
      specialization: "Pediatric Anesthesiology",
      sex: "Female",
      email: "karen.green@hospital.com",
      contact: "555-0011"
    },
    {
      id: "D021",
      firstName: "George",
      lastName: "Baker",
      address: "159 Dogwood Dr, Metropolis, USA",
      department: "Plastic Surgery",
      specialization: "Reconstructive Surgery",
      sex: "Male",
      email: "george.baker@hospital.com",
      contact: "555-1122"
    },
    {
      id: "D022",
      firstName: "Nancy",
      lastName: "Adams",
      address: "753 Elm St, Capital City, USA",
      department: "Geriatrics",
      specialization: "Alzheimer's Care",
      sex: "Female",
      email: "nancy.adams@hospital.com",
      contact: "555-2233"
    },
    {
      id: "D023",
      firstName: "Steven",
      lastName: "Nelson",
      address: "951 Oak Rd, Lakeside, USA",
      department: "Infectious Diseases",
      specialization: "HIV/AIDS Treatment",
      sex: "Male",
      email: "steven.nelson@hospital.com",
      contact: "555-3344"
    },
    {
      id: "D024",
      firstName: "Donna",
      lastName: "Carter",
      address: "357 Pine Ave, Riverside, USA",
      department: "Physical Medicine",
      specialization: "Rehabilitation",
      sex: "Female",
      email: "donna.carter@hospital.com",
      contact: "555-4455"
    },
    {
      id: "D025",
      firstName: "Edward",
      lastName: "Mitchell",
      address: "246 Cedar Ln, Hilltown, USA",
      department: "Vascular Surgery",
      specialization: "Endovascular Surgery",
      sex: "Male",
      email: "edward.mitchell@hospital.com",
      contact: "555-5566"
    },
    {
      id: "D026",
      firstName: "Sandra",
      lastName: "Perez",
      address: "135 Birch Blvd, Valleyville, USA",
      department: "Occupational Medicine",
      specialization: "Workplace Injuries",
      sex: "Female",
      email: "sandra.perez@hospital.com",
      contact: "555-6677"
    },
    {
      id: "D027",
      firstName: "Brian",
      lastName: "Roberts",
      address: "864 Maple St, Mountainview, USA",
      department: "Nuclear Medicine",
      specialization: "PET Imaging",
      sex: "Male",
      email: "brian.roberts@hospital.com",
      contact: "555-7788"
    },
    {
      id: "D028",
      firstName: "Ruth",
      lastName: "Turner",
      address: "975 Spruce Rd, Beachside, USA",
      department: "Pain Management",
      specialization: "Chronic Pain Therapy",
      sex: "Female",
      email: "ruth.turner@hospital.com",
      contact: "555-8899"
    },
    {
      id: "D029",
      firstName: "Kevin",
      lastName: "Phillips",
      address: "528 Willow Way, Deserttown, USA",
      department: "Sports Medicine",
      specialization: "Athletic Injuries",
      sex: "Male",
      email: "kevin.phillips@hospital.com",
      contact: "555-9900"
    },
    {
      id: "D030",
      firstName: "Sharon",
      lastName: "Campbell",
      address: "713 Aspen Ave, Forestville, USA",
      department: "Genetics",
      specialization: "Genetic Counseling",
      sex: "Female",
      email: "sharon.campbell@hospital.com",
      contact: "555-0011"
    },
    {
      id: "D031",
      firstName: "Ronald",
      lastName: "Parker",
      address: "624 Redwood Ct, Groveland, USA",
      department: "Thoracic Surgery",
      specialization: "Lung Cancer Surgery",
      sex: "Male",
      email: "ronald.parker@hospital.com",
      contact: "555-1122"
    },
    {
      id: "D032",
      firstName: "Cynthia",
      lastName: "Evans",
      address: "159 Sequoia St, Plainsville, USA",
      department: "Neonatology",
      specialization: "Premature Infant Care",
      sex: "Female",
      email: "cynthia.evans@hospital.com",
      contact: "555-2233"
    },
    {
      id: "D033",
      firstName: "Larry",
      lastName: "Edwards",
      address: "753 Fir Ln, Cliffside, USA",
      department: "Oral and Maxillofacial Surgery",
      specialization: "Facial Reconstruction",
      sex: "Male",
      email: "larry.edwards@hospital.com",
      contact: "555-3344"
    },
    {
      id: "D034",
      firstName: "Kathleen",
      lastName: "Collins",
      address: "951 Alder Dr, Harbortown, USA",
      department: "Palliative Care",
      specialization: "End-of-Life Care",
      sex: "Female",
      email: "kathleen.collins@hospital.com",
      contact: "555-4455"
    },
    {
      id: "D035",
      firstName: "Gary",
      lastName: "Stewart",
      address: "357 Sycamore Ave, Islandville, USA",
      department: "Podiatry",
      specialization: "Diabetic Foot Care",
      sex: "Male",
      email: "gary.stewart@hospital.com",
      contact: "555-5566"
    },
    {
      id: "D036",
      firstName: "Amy",
      lastName: "Sanchez",
      address: "246 Beech St, Baytown, USA",
      department: "Critical Care Medicine",
      specialization: "ICU Management",
      sex: "Female",
      email: "amy.sanchez@hospital.com",
      contact: "555-6677"
    },
    {
      id: "D037",
      firstName: "Jeffrey",
      lastName: "Morris",
      address: "135 Chestnut Rd, Peakville, USA",
      department: "Colorectal Surgery",
      specialization: "Colon Cancer Surgery",
      sex: "Male",
      email: "jeffrey.morris@hospital.com",
      contact: "555-7788"
    },
    {
      id: "D038",
      firstName: "Shirley",
      lastName: "Rogers",
      address: "864 Walnut Blvd, Canyonville, USA",
      department: "Sleep Medicine",
      specialization: "Sleep Disorders",
      sex: "Female",
      email: "shirley.rogers@hospital.com",
      contact: "555-8899"
    },
    {
      id: "D039",
      firstName: "Scott",
      lastName: "Reed",
      address: "975 Hickory Ln, Prairietown, USA",
      department: "Interventional Radiology",
      specialization: "Minimally Invasive Procedures",
      sex: "Male",
      email: "scott.reed@hospital.com",
      contact: "555-9900"
    },
    {
      id: "D040",
      firstName: "Michelle",
      lastName: "Cook",
      address: "528 Poplar Pl, Coastalville, USA",
      department: "Medical Genetics",
      specialization: "Genetic Disorders",
      sex: "Female",
      email: "michelle.cook@hospital.com",
      contact: "555-0011"
    }
  ];