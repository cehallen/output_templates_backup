
function(row) {
    
    var data = {};
    
    
    var ids = {
        '866101': 'hra_questions.language.difficulty_understanding',
        '866102': 'hra_questions.language.difficulty_understanding_explanation',
        '866103': 'hra_questions.language.primary_language',
        '866104': 'hra_questions.language.primary_language_other',
        '866105': 'hra_questions.language.preferred_language',
        '873100': 'hra_questions.verification.same_street',
        '873101': 'hra_questions.verification.same_street_no',
        '873102': 'hra_questions.verification.moved_times',
        '866107': 'hra_questions.verification.same_phone_number',
        '866108': 'hra_questions.verification.same_phone_number_other',
        '866109': 'hra_questions.verification.marital_status',
        '866110': 'hra_questions.verification.marital_status_other',
        '866111': 'hra_questions.verification.living_arrangement',
        '866112': 'hra_questions.verification.religion',
        '866113': 'hra_questions.verification.religion_other',
        '866114': 'hra_questions.verification.primary_care_physician',
        '866115': 'hra_questions.verification.primary_care_physician_name',
        // '866116': 'hra_questions.verification.xxxxxxxxxxx',
        // '866117': 'hra_information.health.xxxxxxxxxxx',
        '866118': 'hra_information.health.health_status',
        '866119': 'hra_information.health.health_status_compare',
        // '866120': 'hra_information.health.xxxxxxxxxxx',
        '866121': 'hra_information.health.cut_down_time',
        '866122': 'hra_information.health.accomplished_less',
        '866123': 'hra_information.health.limited_activity',
        '866124': 'hra_information.health.difficulty_performing',
        '866125': 'hra_information.health.body_pain',
        '40044': 'hra_information.height_weight.wellcare_format_height',
        '866128': 'hra_information.height_weight.tells_weight',
        '298': 'hra_information.height_weight.weight_lbs',
        // '866129': 'hra_information.height_weight.xxxxxxxxxxx',
        '866130': 'hra_information.tobacco.use_tobacco',
        '866211': 'hra_information.tobacco.use_tobacco_yes_how_much',
        '866212': 'hra_information.tobacco.use_tobacco_yes_how_long',
        '866131': 'hra_information.tobacco.use_tobacco_ever',
        '154': 'hra_information.tobacco.use_tobacco_ever_how_much',
        '155': 'hra_information.tobacco.use_tobacco_ever_how_long',
        '159': 'hra_information.tobacco.use_tobacco_ever_when_quit',
        '866132': 'hra_information.alcoholic.drink_alcoholic',
        '873108': 'hra_information.alcoholic.drink_alcoholic_number',
        '466': 'hra_information.drive.drive',
        '10018': 'hra_information.drive.drive_ever',
        '866136': 'hra_information.drive.drive_ever_yes',
        '866137': 'hra_information.drive.drive_yes_often',
        '545': 'hra_information.drive.driver_license_ever_suspended',
        '137': 'hra_information.drive.license_suspended_when',
        '117': 'hra_information.drive.license_suspended_why',
        '866138': 'health_care.usage.emergency_room',
        '866139': 'health_care.usage.emergency_room_times',
        '866140': 'health_care.usage.overnight_stay',
        '866141': 'health_care.usage.overnight_stay_times',
        '866142': 'health_care.usage.mental_health_issue_overnights',
        '866143': 'health_care.usage.physician_or_clinic_visits_prev_12_months',
        '873104': 'falls_history.fall.falls_in_past_6_months',
        '873103': 'falls_history.fall.fall_6_months_number',
        '866145': 'falls_history.fall.fall_hurt',
        '8658111': 'falls_history.fall.most_serious_injury_from_fall',
        '2066': 'falls_history.fall.fall_injury_other_specify',
        '866147': 'falls_history.fall.limit_activity',
        '866148': 'falls_history.fall.care_from_friend',
        '873105': 'falls_history.fall.friend_phone',
        '866150': 'public_assistance.public_assistance.public_assistance',
        '866151': 'public_assistance.public_assistance.wellcare_format_type_of_public_assistance',
        '866152': 'public_assistance.public_assistance.explain_type_of_public_assistance_other',
        '866153': 'public_assistance.public_assistance.education',
        '866154': 'public_assistance.public_assistance.education_other',
        '866155': 'medical_equipment.equipment.wellcare_format_medical_equipment',
        '866156': 'medical_equipment.equipment.explain_medical_equipment_other',
        '866157': 'medical_equipment.equipment.home_health_services',
        '866158': 'medical_condition.medications.medication_daily',
        '873106': 'medical_condition.medications.wellcare_format_medication_daily_number',
        '873107': 'medical_condition.medical_conditions.wellcare_format_medical_condition',
        '866209': 'medical_condition.medical_conditions.explain_medical_condition_other',
        '8658506': 'medical_condition.pregnancy.due_date',
        '866178': 'medical_condition.recent_mental_condition.little_interest_or_pleasure_in_doing_things',
        '866179': 'medical_condition.recent_mental_condition.feeling_down_depressed_or_hopeless',
        '866180': 'medical_condition.recent_mental_condition.trouble_sleeping_or_sleeping_too_much',
        '866181': 'medical_condition.recent_mental_condition.feeling_tired_or_little_energy',
        '866182': 'medical_condition.recent_mental_condition.poor_appetite_or_overeating',
        '866183': 'medical_condition.recent_mental_condition.low_self_esteem',
        '866184': 'medical_condition.recent_mental_condition.trouble_concentrating',
        '866185': 'medical_condition.recent_mental_condition.moving_or_speaking_more_slowly_than_normal',
        // '866186': 'medical_condition.recent_mental_condition.xxxxxxxxx',
        '866187': 'medical_condition.depression.receiving_depression_counseling',
        '866188': 'medical_condition.depression.taking_depression_medication',
        // '866189': 'functioning_and_cognition.task_performance.xxxxxxxxxxx',
        '866190': 'functioning_and_cognition.task_performance.taking_medications',
        '866191': 'functioning_and_cognition.task_performance.managing_daily_finances',
        '866192': 'functioning_and_cognition.task_performance.doing_housework',
        '866193': 'functioning_and_cognition.task_performance.doing_laundry',
        '866194': 'functioning_and_cognition.task_performance.shopping_for_groceries',
        '866195': 'functioning_and_cognition.task_performance.preparing_meals',
        '866196': 'functioning_and_cognition.task_performance.getting_around_inside_the_house',
        '866197': 'functioning_and_cognition.task_performance.feeding_yourself',
        '866198': 'functioning_and_cognition.task_performance.getting_in_and_out_of_bed_or_chair',
        '866199': 'functioning_and_cognition.task_performance.bathing_and_caring_for_personal_hygiene',
        '866200': 'functioning_and_cognition.task_performance.dressing_yourself',
        '866201': 'functioning_and_cognition.task_performance.using_the_toilet',
        '866202': 'functioning_and_cognition.cognition.what_is_best_action_to_take_in_emergency',
        '866203': 'functioning_and_cognition.cognition.who_is_president_of_US',
        '866204': 'functioning_and_cognition.cognition.what_is_current_date_and_year',
        // '8658463': 'sssssss.fffffff.xxxxxxxxxxx',
        // '8658515': 'sssssss.fffffff.xxxxxxxxxxx',
        // '8658507': 'sssssss.fffffff.xxxxxxxxxxx',
        // '8658508': 'sssssss.fffffff.xxxxxxxxxxx',
        // 'xxxxxxx': 'sssssss.fffffff.xxxxxxxxxxx',
    };
    
    var answers = {
        '866101': {
            'Yes': 0,
            'No': 1
        },
        '866103': {
            'English': 0,
            'Spanish': 1,
            'Other': 2
        },
        '873100': {
            'Yes': 0,
            'No': 1
        },
        '866107': {
            'Yes': 0,
            'No': 1
        },
        '866109': {
            'Married': 0,
            'Not Married': 1,
            'Separated': 2,
            'Divorced': 3,
            'Widowed': 4,
            'Other': 5
        },
        '866111': {
            'Alone': 0,
            'Spouse': 1,
            'Other': 2
        },
        '866112': {
            'Catholic': 0,
            'Protestant': 1,
            'Jewish': 2,
            'Islamic': 3,
            'Buddhist': 4,
            'Hindu': 5,
            'None': 6,
            'Other': 7
        },
        '866114': {
            'Yes': 0,
            'No': 1
        },
        '866118': {
            'Excellent': 0,
            'Very Good': 1,
            'Good': 2,
            'Fair': 3,
            'Poor': 4,
            'Skip': 5    
        },  
        '866119': {
            'Much better': 0,
            'Somewhat better': 1,
            'About the same': 2,
            'Much worse': 3,
            'Skip': 4,
        },
        '866121': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866122': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866123': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866124': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866125': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866128': {
            'Yes': 0,
            'Skip': 1
        },
        '866130': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866131': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866132': {
            'Never': 0,
            'Daily': 1,
            'Weekly': 2,
            'Monthly': 3,
            'Skip': 4,
        },
        '466': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '10018': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866137': {
            'Daily': 0,
            'Weekly': 1,
            'Monthly': 2
        },
        '545': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866138': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866139': {
            'Once': 0,
            'Twice': 1,
            'More than three times': 2,
            'Skip': 3
        },
        '866140': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866141': {
            'Once': 0,
            'Twice': 1,
            'More than three times': 2,
            'Skip': 3
        },
        '866142': {
            'No': 0,
            'Once': 1,
            'Twice': 2,
            'More than three times': 3,
            'Skip': 4,
        },
        '866143': {
            'Not at all': 0,
            'Once': 1,
            'Twice or three times': 2,
            'Four to six times': 3,
            'More than six times': 4,
            'Skip': 5
        },
        '873104': {
            'Yes': 0,
            'No': 1
        },
        '866145': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '8658111': {
            'Bruises': 0,
            'Discomfort': 1,
            'Head Injury': 2,
            'Back/Vertebrae Fracture': 3,
            'Wrist/Arm Fracture': 4,
            'Leg Fracture': 5,
            'Cuts': 6,
            'Other': 7
        },
        '866147': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866148': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866150': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866153': {
            'Elementary School': 0,
            'High School Diploma': 1,
            'G.E.D.': 2,
            'Associates': 3,
            'Bachelors': 4,
            'Post-graduate': 5,
            'Other': 6,
            'Skip': 7
        },
        '866157': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866158': {
            'Tells': 0,
            'Skip': 1
        },
        '866178': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        '866179': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        '866180': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        '866181': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        '866182': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        '866183': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        '866184': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        '866185': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        '866187': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866188': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        '866190': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866191': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866192': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866193': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866194': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866195': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866196': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866197': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866198': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866199': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866200': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866201': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        '866202': {
            'Appropriate response': 0,
            'Inappropriate response': 1,
            'Skip': 2
        },
        '866203': {
            'Appropriate response': 0,
            'Inappropriate response': 1,
            'Skip': 2
        },
        '866204': {
            'Appropriate response': 0,
            'Inappropriate response': 1,
            'Skip': 2
        },
    };

    
    _.each(ids, function(value, key) {
        data[key] = _.deepGet(row.data.values, value);
    });
    
    _.each(data, function(value, key) {
        if (answers[key]) {
            data[key] = answers[key][value];
        }
    })
    
    return data;
}