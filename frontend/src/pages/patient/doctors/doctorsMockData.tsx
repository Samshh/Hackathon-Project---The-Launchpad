export type Doctor = {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  department: string;
  specialization: string;
  sex: 'Male' | 'Female';
  email: string;
  contact: string;
};

export const doctorsMockData: Doctor[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St, Springfield',
    department: 'Anesthesiology',
    specialization: 'Pediatric Anesthesiology',
    sex: 'Male',
    email: 'john.doe@example.com',
    contact: '555-1234',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    address: '456 Elm St, Springfield',
    department: 'Pediatrics',
    specialization: 'Neonatology',
    sex: 'Female',
    email: 'jane.smith@example.com',
    contact: '555-5678',
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Johnson',
    address: '789 Oak St, Springfield',
    department: 'Dermatology',
    specialization: 'Cosmetic Dermatology',
    sex: 'Male',
    email: 'michael.johnson@example.com',
    contact: '555-8765',
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    address: '321 Pine St, Springfield',
    department: 'Emergency Medicine',
    specialization: 'Trauma Care',
    sex: 'Female',
    email: 'emily.davis@example.com',
    contact: '555-4321',
  },
  {
    id: '5',
    firstName: 'Robert',
    lastName: 'Miller',
    address: '654 Maple St, Springfield',
    department: 'Family Medicine',
    specialization: 'Primary Care',
    sex: 'Male',
    email: 'robert.miller@example.com',
    contact: '555-8762',
  },
  {
    id: '6',
    firstName: 'Linda',
    lastName: 'Wilson',
    address: '987 Cedar St, Springfield',
    department: 'Otolaryngology',
    specialization: 'Head and Neck Surgery',
    sex: 'Female',
    email: 'linda.wilson@example.com',
    contact: '555-6789',
  },
  {
    id: '7',
    firstName: 'James',
    lastName: 'Moore',
    address: '135 Birch St, Springfield',
    department: 'Pathology',
    specialization: 'Forensic Pathology',
    sex: 'Male',
    email: 'james.moore@example.com',
    contact: '555-9876',
  },
  {
    id: '8',
    firstName: 'Patricia',
    lastName: 'Taylor',
    address: '246 Aspen St, Springfield',
    department: 'Gastroenterology',
    specialization: 'Hepatology',
    sex: 'Female',
    email: 'patricia.taylor@example.com',
    contact: '555-3456',
  },
  {
    id: '9',
    firstName: 'William',
    lastName: 'Anderson',
    address: '357 Spruce St, Springfield',
    department: 'Obstretrics and Gynecology',
    specialization: 'Maternal-Fetal Medicine',
    sex: 'Male',
    email: 'william.anderson@example.com',
    contact: '555-6543',
  },
  {
    id: '10',
    firstName: 'Barbara',
    lastName: 'Thomas',
    address: '468 Walnut St, Springfield',
    department: 'Ophthalmology',
    specialization: 'Glaucoma',
    sex: 'Female',
    email: 'barbara.thomas@example.com',
    contact: '555-8769',
  },
  {
    id: '11',
    firstName: 'Christopher',
    lastName: 'Jackson',
    address: '579 Cherry St, Springfield',
    department: 'Psychiatry',
    specialization: 'Child and Adolescent Psychiatry',
    sex: 'Male',
    email: 'christopher.jackson@example.com',
    contact: '555-6784',
  },
  {
    id: '12',
    firstName: 'Susan',
    lastName: 'White',
    address: '681 Hickory St, Springfield',
    department: 'Surgery',
    specialization: 'Cardiothoracic Surgery',
    sex: 'Female',
    email: 'susan.white@example.com',
    contact: '555-3459',
  },
  {
    id: '13',
    firstName: 'Joseph',
    lastName: 'Harris',
    address: '792 Cypress St, Springfield',
    department: 'Cardiology',
    specialization: 'Interventional Cardiology',
    sex: 'Male',
    email: 'joseph.harris@example.com',
    contact: '555-7890',
  },
  {
    id: '14',
    firstName: 'Karen',
    lastName: 'Martin',
    address: '893 Willow St, Springfield',
    department: 'Endocrinologists',
    specialization: 'Diabetes Management',
    sex: 'Female',
    email: 'karen.martin@example.com',
    contact: '555-4325',
  },
  {
    id: '15',
    firstName: 'Thomas',
    lastName: 'Thompson',
    address: '124 Poplar St, Springfield',
    department: 'General Internal Medicine',
    specialization: 'Primary Care',
    sex: 'Male',
    email: 'thomas.thompson@example.com',
    contact: '555-6548',
  },
  {
    id: '16',
    firstName: 'Nancy',
    lastName: 'Garcia',
    address: '235 Sycamore St, Springfield',
    department: 'Neurology',
    specialization: 'Epilepsy',
    sex: 'Female',
    email: 'nancy.garcia@example.com',
    contact: '555-8763',
  },
  {
    id: '17',
    firstName: 'Charles',
    lastName: 'Martinez',
    address: '346 Fir St, Springfield',
    department: 'Radiology',
    specialization: 'Interventional Radiology',
    sex: 'Male',
    email: 'charles.martinez@example.com',
    contact: '555-3457',
  },
  {
    id: '18',
    firstName: 'Lisa',
    lastName: 'Robinson',
    address: '457 Redwood St, Springfield',
    department: 'Hematology',
    specialization: 'Blood Disorders',
    sex: 'Female',
    email: 'lisa.robinson@example.com',
    contact: '555-6786',
  },
  {
    id: '19',
    firstName: 'Daniel',
    lastName: 'Clark',
    address: '568 Palm St, Springfield',
    department: 'Immunology',
    specialization: 'Allergy and Immunology',
    sex: 'Male',
    email: 'daniel.clark@example.com',
    contact: '555-7891',
  },
  {
    id: '20',
    firstName: 'Margaret',
    lastName: 'Rodriguez',
    address: '679 Magnolia St, Springfield',
    department: 'Infectious Diseases',
    specialization: 'HIV/AIDS',
    sex: 'Female',
    email: 'margaret.rodriguez@example.com',
    contact: '555-4326',
  },
  {
    id: '21',
    firstName: 'Paul',
    lastName: 'Lewis',
    address: '780 Juniper St, Springfield',
    department: 'Rehabilitation Medicine',
    specialization: 'Physical Therapy',
    sex: 'Male',
    email: 'paul.lewis@example.com',
    contact: '555-6547',
  },
  {
    id: '22',
    firstName: 'Donna',
    lastName: 'Lee',
    address: '891 Sequoia St, Springfield',
    department: 'Anatomy',
    specialization: 'Clinical Anatomy',
    sex: 'Female',
    email: 'donna.lee@example.com',
    contact: '555-8768',
  },
  {
    id: '23',
    firstName: 'Mark',
    lastName: 'Walker',
    address: '902 Ash St, Springfield',
    department: 'Nephrology',
    specialization: 'Renal Transplantation',
    sex: 'Male',
    email: 'mark.walker@example.com',
    contact: '555-3454',
  },
  {
    id: '24',
    firstName: 'Sandra',
    lastName: 'Hall',
    address: '123 Willow St, Springfield',
    department: 'Radiation Therapy',
    specialization: 'Oncology',
    sex: 'Female',
    email: 'sandra.hall@example.com',
    contact: '555-6781',
  },
  {
    id: '25',
    firstName: 'Steven',
    lastName: 'Young',
    address: '234 Maple St, Springfield',
    department: 'Anesthesiology',
    specialization: 'Pain Medicine',
    sex: 'Male',
    email: 'steven.young@example.com',
    contact: '555-7895',
  },
  {
    id: '26',
    firstName: 'Betty',
    lastName: 'Hernandez',
    address: '345 Elm St, Springfield',
    department: 'Pediatrics',
    specialization: 'Pediatric Cardiology',
    sex: 'Female',
    email: 'betty.hernandez@example.com',
    contact: '555-4322',
  },
  {
    id: '27',
    firstName: 'Edward',
    lastName: 'King',
    address: '456 Oak St, Springfield',
    department: 'Dermatology',
    specialization: 'Mohs Surgery',
    sex: 'Male',
    email: 'edward.king@example.com',
    contact: '555-6546',
  },
  {
    id: '28',
    firstName: 'Dorothy',
    lastName: 'Wright',
    address: '567 Pine St, Springfield',
    department: 'Emergency Medicine',
    specialization: 'Toxicology',
    sex: 'Female',
    email: 'dorothy.wright@example.com',
    contact: '555-8767',
  },
  {
    id: '29',
    firstName: 'Brian',
    lastName: 'Lopez',
    address: '678 Cedar St, Springfield',
    department: 'Family Medicine',
    specialization: 'Geriatric Medicine',
    sex: 'Male',
    email: 'brian.lopez@example.com',
    contact: '555-3453',
  },
  {
    id: '30',
    firstName: 'Laura',
    lastName: 'Scott',
    address: '789 Birch St, Springfield',
    department: 'Otolaryngology',
    specialization: 'Rhinology',
    sex: 'Female',
    email: 'laura.scott@example.com',
    contact: '555-6785',
  },
];
