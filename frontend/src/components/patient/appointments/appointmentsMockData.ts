import { PastAppointment } from "./allAppointmentsColumns";

export const appointmentsMockData: PastAppointment[] = [
  {
    doctor: {
      name: 'John Smith',
      specialization: 'Cardiologist',
    },
    status: 1,
    note: 'Experiencing occasional chest pain, need to discuss medication adjustment.',
    ETA: '2024-07-01-09-30',
    diagnosis: 'Mild angina',
    prescription: 'Increase dosage of nitroglycerin to 0.6mg as needed. Schedule stress test next week.'
  },
  {
    doctor: {
      name: 'Emily Johnson',
      specialization: 'Pediatrician',
    },
    status: 0,
    note: 'Routine vaccination for my 6-month-old, any preparatory steps needed?',
    ETA: '2024-07-02-14-15',
    diagnosis: 'Healthy infant, due for routine vaccinations',
    prescription: 'Administer DTaP, IPV, and PCV13 vaccines. Monitor for fever, give acetaminophen if needed.'
  },
  {
    doctor: {
      name: 'Michael Lee',
      specialization: 'Dermatologist',
    },
    status: 1,
    note: 'Persistent rash on arms, not responding to over-the-counter creams.',
    ETA: '2024-07-03-11-00',
    diagnosis: 'Atopic dermatitis',
    prescription: 'Apply hydrocortisone 1% cream twice daily for 7 days. Use fragrance-free moisturizer regularly.'
  },
  {
    doctor: {
      name: 'Sarah Brown',
      specialization: 'Orthopedist',
    },
    status: 0,
    note: 'Post-surgery checkup, experiencing some stiffness in the knee.',
    ETA: '2024-07-04-16-45',
    diagnosis: 'Normal post-operative recovery',
    prescription: 'Continue physical therapy exercises 3 times daily. Use ice pack for 15 minutes after exercises.'
  },
  {
    doctor: {
      name: 'David Wilson',
      specialization: 'Neurologist',
    },
    status: 1,
    note: 'Frequent migraines, need to discuss possible triggers and treatment options.',
    ETA: '2024-07-05-10-30',
    diagnosis: 'Chronic migraine',
    prescription: 'Start sumatriptan 50mg at onset of migraine. Keep headache diary. Avoid identified triggers.'
  },
  {
    doctor: {
      name: 'Lisa Chen',
      specialization: 'Ophthalmologist',
    },
    status: 0,
    note: 'Annual eye exam, noticing some difficulty with night driving.',
    ETA: '2024-07-06-13-00',
    diagnosis: 'Mild myopia with astigmatism',
    prescription: 'New glasses prescription: OD -1.25 -0.75 x 180, OS -1.00 -0.50 x 175. Consider anti-glare coating.'
  },
  {
    doctor: {
      name: 'Robert Taylor',
      specialization: 'Gastroenterologist',
    },
    status: 1,
    note: 'Ongoing stomach discomfort, need to discuss diet changes and possible tests.',
    ETA: '2024-07-07-15-30',
    diagnosis: 'Suspected gastroesophageal reflux disease (GERD)',
    prescription: 'Take omeprazole 20mg daily before breakfast. Avoid spicy foods and eating close to bedtime.'
  },
  {
    doctor: {
      name: 'Amanda Martinez',
      specialization: 'Endocrinologist',
    },
    status: 0,
    note: 'Regular thyroid check, no new symptoms to report.',
    ETA: '2024-07-08-09-45',
    diagnosis: 'Stable hypothyroidism',
    prescription: 'Continue current levothyroxine dosage. Recheck TSH levels in 6 months.'
  },
  {
    doctor: {
      name: 'Kevin Patel',
      specialization: 'Urologist',
    },
    status: 1,
    note: 'Follow-up on recent kidney stone treatment, experiencing some discomfort.',
    ETA: '2024-07-09-11-15',
    diagnosis: 'Post-lithotripsy discomfort',
    prescription: 'Take ibuprofen 400mg every 6 hours as needed for pain. Increase fluid intake to 3L daily.'
  },
  {
    doctor: {
      name: 'Olivia White',
      specialization: 'Psychiatrist',
    },
    status: 0,
    note: 'Regular session for anxiety management, want to discuss new coping strategies.',
    ETA: '2024-07-10-14-00',
    diagnosis: 'Generalized anxiety disorder',
    prescription: 'Continue sertraline 50mg daily. Practice mindfulness exercises 15 minutes daily.'
  },
  {
    doctor: {
      name: 'Daniel Kim',
      specialization: 'Allergist',
    },
    status: 1,
    note: 'Experiencing new food allergies, need comprehensive testing.',
    ETA: '2024-07-11-10-00',
    diagnosis: 'Suspected food allergies',
    prescription: 'Conduct skin prick test for common allergens. Avoid suspected trigger foods until results are available.'
  },
  {
    doctor: {
      name: 'Rachel Green',
      specialization: 'Gynecologist',
    },
    status: 0,
    note: 'Annual checkup, need to discuss family planning options.',
    ETA: '2024-07-12-13-30',
    diagnosis: 'Healthy, considering family planning',
    prescription: 'Start prenatal vitamins. Schedule follow-up to discuss contraception options if needed.'
  },
  {
    doctor: {
      name: 'Thomas Anderson',
      specialization: 'Pulmonologist',
    },
    status: 1,
    note: 'Asthma symptoms worsening, need to review inhaler usage and possibly adjust medication.',
    ETA: '2024-07-13-15-45',
    diagnosis: 'Poorly controlled asthma',
    prescription: 'Increase fluticasone/salmeterol inhaler to twice daily. Use albuterol inhaler as needed.'
  },
  {
    doctor: {
      name: 'Sophia Rodriguez',
      specialization: 'Rheumatologist',
    },
    status: 0,
    note: 'Joint pain in hands and knees, concerned about early signs of arthritis.',
    ETA: '2024-07-14-11-30',
    diagnosis: 'Early osteoarthritis',
    prescription: 'Take glucosamine sulfate 1500mg daily. Start low-impact exercises. Apply topical diclofenac gel as needed.'
  },
  {
    doctor: {
      name: 'William Chang',
      specialization: 'Oncologist',
    },
    status: 1,
    note: 'Regular cancer screening, family history of breast cancer.',
    ETA: '2024-07-15-09-00',
    diagnosis: 'No signs of cancer detected',
    prescription: 'Continue annual mammograms. Perform monthly self-breast exams. Maintain healthy lifestyle.'
  },
  {
    doctor: {
      name: 'Emma Thompson',
      specialization: 'Nutritionist',
    },
    status: 0,
    note: 'Need help with meal planning for weight loss and diabetes management.',
    ETA: '2024-07-16-14-30',
    diagnosis: 'Type 2 diabetes with obesity',
    prescription: 'Follow provided 1800-calorie meal plan. Monitor blood glucose levels twice daily. Increase physical activity.'
  },
  {
    doctor: {
      name: 'George Miller',
      specialization: 'ENT Specialist',
    },
    status: 1,
    note: 'Recurring sinus infections, need to explore long-term treatment options.',
    ETA: '2024-07-17-10-45',
    diagnosis: 'Chronic sinusitis',
    prescription: 'Use saline nasal rinse twice daily. Start fluticasone nasal spray once daily. Schedule follow-up in 1 month.'
  },
  {
    doctor: {
      name: 'Natalie Wong',
      specialization: 'Dentist',
    },
    status: 0,
    note: 'Regular cleaning and checkup, have some sensitivity in lower left molar.',
    ETA: '2024-07-18-16-00',
    diagnosis: 'Mild tooth decay in lower left molar',
    prescription: 'Schedule appointment for dental filling. Use sensitivity toothpaste. Floss daily.'
  },
  {
    doctor: {
      name: 'Christopher Lee',
      specialization: 'Podiatrist',
    },
    status: 1,
    note: 'Persistent heel pain, possibly plantar fasciitis.',
    ETA: '2024-07-19-11-45',
    diagnosis: 'Plantar fasciitis',
    prescription: 'Wear supportive shoes with orthotic inserts. Perform provided stretching exercises 3 times daily. Apply ice for 15 minutes after activity.'
  },
  {
    doctor: {
      name: 'Alexandra Foster',
      specialization: 'Hematologist',
    },
    status: 0,
    note: 'Follow-up on anemia treatment, feeling much better but still occasionally tired.',
    ETA: '2024-07-20-13-15',
    diagnosis: 'Iron-deficiency anemia, improving',
    prescription: 'Continue iron supplements 325mg daily. Increase dietary intake of iron-rich foods. Recheck hemoglobin levels in 1 month.'
  },
];