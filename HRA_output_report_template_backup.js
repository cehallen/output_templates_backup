
function(row) {
    
    var data = {};
    
    
    var ids = {
        'a866101': 'hra_questions.language.difficulty_understanding',
        'a866102': 'hra_questions.language.difficulty_understanding_explanation',
        'a866103': 'hra_questions.language.primary_language',
        'a866104': 'hra_questions.language.primary_language_other',
        'a866105': 'hra_questions.language.preferred_language',
        'a873100': 'hra_questions.verification.same_street',
        'a873101': 'hra_questions.verification.same_street_no',
        'a873102': 'hra_questions.verification.moved_times',
        'a866107': 'hra_questions.verification.same_phone_number',
        'a866108': 'hra_questions.verification.same_phone_number_other',
        'a866109': 'hra_questions.verification.marital_status',
        'a866110': 'hra_questions.verification.marital_status_other',
        'a866111': 'hra_questions.verification.living_arrangement',
        'a866112': 'hra_questions.verification.religion',
        'a866113': 'hra_questions.verification.religion_other',
        'a866114': 'hra_questions.verification.primary_care_physician',
        'a866115': 'hra_questions.verification.primary_care_physician_name',
        // 'a866116': 'hra_questions.verification.xxxxxxxxxxx',
        // 'a866117': 'hra_information.health.xxxxxxxxxxx',
        'a866118': 'hra_information.health.health_status',
        'a866119': 'hra_information.health.health_status_compare',
        // 'a866120': 'hra_information.health.xxxxxxxxxxx',
        'a866121': 'hra_information.health.cut_down_time',
        'a866122': 'hra_information.health.accomplished_less',
        'a866123': 'hra_information.health.limited_activity',
        'a866124': 'hra_information.health.difficulty_performing',
        'a866125': 'hra_information.health.body_pain',
        'a40044': 'hra_information.height_weight.wellcare_format_height',
        'a866128': 'hra_information.height_weight.tells_weight',
        'a298': 'hra_information.height_weight.weight_lbs',
        // 'a866129': 'hra_information.height_weight.xxxxxxxxxxx',
        'a866130': 'hra_information.tobacco.use_tobacco',
        'a866211': 'hra_information.tobacco.use_tobacco_yes_how_much',
        'a866212': 'hra_information.tobacco.use_tobacco_yes_how_long',
        'a866131': 'hra_information.tobacco.use_tobacco_ever',
        'a154': 'hra_information.tobacco.use_tobacco_ever_how_much',
        'a155': 'hra_information.tobacco.use_tobacco_ever_how_long',
        'a159': 'hra_information.tobacco.use_tobacco_ever_when_quit',
        'a866132': 'hra_information.alcoholic.drink_alcoholic',
        'a873108': 'hra_information.alcoholic.drink_alcoholic_number',
        'a466': 'hra_information.drive.drive',
        'a10018': 'hra_information.drive.drive_ever',
        'a866136': 'hra_information.drive.drive_ever_yes',
        'a866137': 'hra_information.drive.drive_yes_often',
        'a545': 'hra_information.drive.driver_license_ever_suspended',
        'a137': 'hra_information.drive.license_suspended_when',
        'a117': 'hra_information.drive.license_suspended_why',
        'a866138': 'health_care.usage.emergency_room',
        'a866139': 'health_care.usage.emergency_room_times',
        'a866140': 'health_care.usage.overnight_stay',
        'a866141': 'health_care.usage.overnight_stay_times',
        'a866142': 'health_care.usage.mental_health_issue_overnights',
        'a866143': 'health_care.usage.physician_or_clinic_visits_prev_12_months',
        'a873104': 'falls_history.fall.falls_in_past_6_months',
        'a873103': 'falls_history.fall.fall_6_months_number',
        'a866145': 'falls_history.fall.fall_hurt',
        'a8658111': 'falls_history.fall.most_serious_injury_from_fall',
        'a2066': 'falls_history.fall.fall_injury_other_specify',
        'a866147': 'falls_history.fall.limit_activity',
        'a866148': 'falls_history.fall.care_from_friend',
        'a873105': 'falls_history.fall.friend_phone',
        'a866150': 'public_assistance.public_assistance.public_assistance',
        'a866151': 'public_assistance.public_assistance.wellcare_format_type_of_public_assistance',
        'a866152': 'public_assistance.public_assistance.explain_type_of_public_assistance_other',
        'a866153': 'public_assistance.public_assistance.education',
        'a866154': 'public_assistance.public_assistance.education_other',
        'a866155': 'medical_equipment.equipment.wellcare_format_medical_equipment',
        'a866156': 'medical_equipment.equipment.explain_medical_equipment_other',
        'a866157': 'medical_equipment.equipment.home_health_services',
        'a866158': 'medical_condition.medications.medication_daily',
        'a873106': 'medical_condition.medications.wellcare_format_medication_daily_number',
        'a873107': 'medical_condition.medical_conditions.wellcare_format_medical_condition',
        'a866209': 'medical_condition.medical_conditions.explain_medical_condition_other',
        'a8658506': 'medical_condition.pregnancy.due_date',
        'a866178': 'medical_condition.recent_mental_condition.little_interest_or_pleasure_in_doing_things',
        'a866179': 'medical_condition.recent_mental_condition.feeling_down_depressed_or_hopeless',
        'a866180': 'medical_condition.recent_mental_condition.trouble_sleeping_or_sleeping_too_much',
        'a866181': 'medical_condition.recent_mental_condition.feeling_tired_or_little_energy',
        'a866182': 'medical_condition.recent_mental_condition.poor_appetite_or_overeating',
        'a866183': 'medical_condition.recent_mental_condition.low_self_esteem',
        'a866184': 'medical_condition.recent_mental_condition.trouble_concentrating',
        'a866185': 'medical_condition.recent_mental_condition.moving_or_speaking_more_slowly_than_normal',
        // 'a866186': 'medical_condition.recent_mental_condition.xxxxxxxxx',
        'a866187': 'medical_condition.depression.receiving_depression_counseling',
        'a866188': 'medical_condition.depression.taking_depression_medication',
        // 'a866189': 'functioning_and_cognition.task_performance.xxxxxxxxxxx',
        'a866190': 'functioning_and_cognition.task_performance.taking_medications',
        'a866191': 'functioning_and_cognition.task_performance.managing_daily_finances',
        'a866192': 'functioning_and_cognition.task_performance.doing_housework',
        'a866193': 'functioning_and_cognition.task_performance.doing_laundry',
        'a866194': 'functioning_and_cognition.task_performance.shopping_for_groceries',
        'a866195': 'functioning_and_cognition.task_performance.preparing_meals',
        'a866196': 'functioning_and_cognition.task_performance.getting_around_inside_the_house',
        'a866197': 'functioning_and_cognition.task_performance.feeding_yourself',
        'a866198': 'functioning_and_cognition.task_performance.getting_in_and_out_of_bed_or_chair',
        'a866199': 'functioning_and_cognition.task_performance.bathing_and_caring_for_personal_hygiene',
        'a866200': 'functioning_and_cognition.task_performance.dressing_yourself',
        'a866201': 'functioning_and_cognition.task_performance.using_the_toilet',
        'a866202': 'functioning_and_cognition.cognition.what_is_best_action_to_take_in_emergency',
        'a866203': 'functioning_and_cognition.cognition.who_is_president_of_US',
        'a866204': 'functioning_and_cognition.cognition.what_is_current_date_and_year',
        // 'a8658463': 'sssssss.fffffff.xxxxxxxxxxx',
        // 'a8658515': 'sssssss.fffffff.xxxxxxxxxxx',
        // 'a8658507': 'sssssss.fffffff.xxxxxxxxxxx',
        // 'a8658508': 'sssssss.fffffff.xxxxxxxxxxx',
        // 'xxxxxxx': 'sssssss.fffffff.xxxxxxxxxxx',
        // 'xxxxxxx': 'sssssss.fffffff.xxxxxxxxxxx',
        // 'xxxxxxx': 'sssssss.fffffff.xxxxxxxxxxx',
        // 'xxxxxxx': 'sssssss.fffffff.xxxxxxxxxxx',
        // 'xxxxxxx': 'sssssss.fffffff.xxxxxxxxxxx',
    };
    
    var answers = {
        'a866101': {
            'Yes': 0,
            'No': 1
        },
        'a866103': {
            'English': 0,
            'Spanish': 1,
            'Other': 2
        },
        'a873100': {
            'Yes': 0,
            'No': 1
        },
        'a866107': {
            'Yes': 0,
            'No': 1
        },
        'a866109': {
            'Married': 0,
            'Not Married': 1,
            'Separated': 2,
            'Divorced': 3,
            'Widowed': 4,
            'Other': 5
        },
        'a866111': {
            'Alone': 0,
            'Spouse': 1,
            'Other': 2
        },
        'a866112': {
            'Catholic': 0,
            'Protestant': 1,
            'Jewish': 2,
            'Islamic': 3,
            'Buddhist': 4,
            'Hindu': 5,
            'None': 6,
            'Other': 7
        },
        'a866114': {
            'Yes': 0,
            'No': 1
        },
        'a866118': {
            'Excellent': 0,
            'Very Good': 1,
            'Good': 2,
            'Fair': 3,
            'Poor': 4,
            'Skip': 5    
        },  
        'a866119': {
            'Much better': 0,
            'Somewhat better': 1,
            'About the same': 2,
            'Much worse': 3,
            'Skip': 4,
        },
        'a866121': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866122': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866123': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866124': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866125': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866128': {
            'Yes': 0,
            'Skip': 1
        },
        'a866130': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866131': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866132': {
            'Never': 0,
            'Daily': 1,
            'Weekly': 2,
            'Monthly': 3,
            'Skip': 4,
        },
        'a466': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a10018': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866137': {
            'Daily': 0,
            'Weekly': 1,
            'Monthly': 2
        },
        'a545': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866138': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866139': {
            'Once': 0,
            'Twice': 1,
            'More than three times': 2,
            'Skip': 3
        },
        'a866140': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866141': {
            'Once': 0,
            'Twice': 1,
            'More than three times': 2,
            'Skip': 3
        },
        'a866142': {
            'No': 0,
            'Once': 1,
            'Twice': 2,
            'More than three times': 3,
            'Skip': 4,
        },
        'a866143': {
            'Not at all': 0,
            'Once': 1,
            'Twice or three times': 2,
            'Four to six times': 3,
            'More than six times': 4,
            'Skip': 5
        },
        'a873104': {
            'Yes': 0,
            'No': 1
        },
        'a866145': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a8658111': {
            'Bruises': 0,
            'Discomfort': 1,
            'Head Injury': 2,
            'Back/Vertebrae Fracture': 3,
            'Wrist/Arm Fracture': 4,
            'Leg Fracture': 5,
            'Cuts': 6,
            'Other': 7
        },
        'a866147': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866148': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866150': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866153': {
            'Elementary School': 0,
            'High School Diploma': 1,
            'G.E.D.': 2,
            'Associates': 3,
            'Bachelors': 4,
            'Post-graduate': 5,
            'Other': 6,
            'Skip': 7
        },
        'a866157': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866158': {
            'Tells': 0,
            'Skip': 1
        },
        'a866178': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        'a866179': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        'a866180': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        'a866181': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        'a866182': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        'a866183': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        'a866184': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        'a866185': {
            'Not at all': 0,
            'Several days': 1,
            'More than seven days': 2,
            'Nearly every day': 3,
            'Skip': 4,
        },
        'a866187': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866188': {
            'Yes': 0,
            'No': 1,
            'Skip': 2
        },
        'a866190': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866191': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866192': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866193': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866194': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866195': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866196': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866197': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866198': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866199': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866200': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866201': {
            'Independent': 0,
            'Partially dependent': 1,
            'Dependent': 2,
            'Skip': 3
        },
        'a866202': {
            'Appropriate response': 0,
            'Inappropriate response': 1,
            'Skip': 2
        },
        'a866203': {
            'Appropriate response': 0,
            'Inappropriate response': 1,
            'Skip': 2
        },
        'a866204': {
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