var mysql = require('mysql');


function create_table(name, headers) {
    var sql = "CREATE TABLE " + name + " (" + headers + ");"; 

    console.log(sql);

    var con = mysql.createConnection({
        host: "den1.mysql6.gear.host",
        user: "icare",
        password: "team9!",
        database: "icare"
    });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Database created");
        });
        con.end();
    });

}

module.exports.create_table = create_table;
/*
create_table("client", 
    " `Processing Details` VARCHAR(255)," + 
    " `Unique Identifier` VARCHAR(255)," + 
    " `Unique Identifier Value` INT," + 
    " `Date of Birth (YYYY-MM-DD)` DATE," + 
    " `Phone Number` VARCHAR(255)," + 
    " `Does the Client Have an Email Address` VARCHAR(255)," + 
    " `Email Address` VARCHAR(255)," + 
    " `Street Number` INT," + 
    " `Street Name` VARCHAR(255)," + 
    " `Street Type` VARCHAR(255)," + 
    " `Street Direction` VARCHAR(255)," + 
    " `Unit/Suite/Apt` INT," + 
    " `City` VARCHAR(255)," + 
    " `Province` VARCHAR(255)," + 
    " `Postal Code` VARCHAR(255)," + 
    " `Official Language of Preference` VARCHAR(255)," + 
    " `Consent for Future Research/Consultation` VARCHAR(255)," +
    " PRIMARY KEY (`Unique Identifier`, `Unique Identifier Value`)");

// create rest of the tables later
create_table("organization",
    " Name VARCHAR(255)," +
    " organization_id INT AUTO_INCREMENT PRIMARY KEY");

// create user accounts

create_table("accounts",
    " Name VARCHAR(255)," +
    " Email VARCHAR(255)," +
    " Password VARCHAR(255)," +
    " id INT AUTO_INCREMENT PRIMARY KEY," +
    " organization_id INT,"+
    " permissions INT," +
    " FOREIGN KEY (organization_id) references organization(organization_id)");

// TODO: shorten the column headers

create_table("`Needs Assessment`",
" `Processing Details` VARCHAR(255)," + 
" `Update Record ID` INT," + 
" `Unique Identifier` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(60)," + 
" `Start Date of Assessment (YYYY-MM-DD)` DATE," + // PRIMARY KEY??
" `Language of Service` VARCHAR(60)," + 
" `Official Language of Preference` VARCHAR(60)," + 
" `Type of Institution/Organization Where Client Received Services` VARCHAR(60)," + 
" `Referred By` VARCHAR(60)," + 
" `IKO: Life in Canada` VARCHAR(60)," + 
" `IKO: Life in Canada Referrals` VARCHAR(60)," + 
" `IKO: Community and Government Services` VARCHAR(60)," + 
" `IKO: Community and Government Services Referrals` VARCHAR(60)," + 
" `IKO: Working in Canada` VARCHAR(60)," + 
" `IKO: Working in Canada Referrals` VARCHAR(60)," + 
" `IKO: Education in Canada` VARCHAR(60)," + 
" `IKO: Education in Canada Referrals` VARCHAR(60)," + 
" `ITF: Social networks` VARCHAR(60)," + 
" `ITF: Social networks Referrals` VARCHAR(60)," + 
" `ITF: Professional networks` VARCHAR(60)," + 
" `ITF: Professional networks Referrals` VARCHAR(60)," + 
" `ITF: Access to local community services` VARCHAR(60)," + 
" `ITF: Access to local community services Referrals` VARCHAR(60)," + 
" `ITF: Level of community involvement` VARCHAR(60)," + 
" `ITF: Level of community involvement Referrals` VARCHAR(60)," + 
" `Improve Language Skills` VARCHAR(60)," + 
" `Improve Language Skills Referrals` VARCHAR(60)," + 
" `Improve Language Skills to` VARCHAR(60)," + 
" `Improve Other Skills` VARCHAR(60)," + 
" `Improve Other Skills Referrals` VARCHAR(60)," + 
" `Improve Other Skills to` VARCHAR(60)," + 
" `Find employment` VARCHAR(60)," + 
" `Find employment Referrals` VARCHAR(60)," + 
" `Find employment: TimeFrame` VARCHAR(60)," + 
" `Find employment: Minimum one year's work experience?` VARCHAR(60)," + 
" `Find employment: which NOC skill level?` VARCHAR(60)," +            // NOC IS NATIONAL OCCUPATIONAL CLASSI
" `Find employment: Intends to obtain license to work in Canada?` VARCHAR(60)," + 
" `Client intends to become a Canadian citizen?` VARCHAR(60)," + 
" `Support services may be required` VARCHAR(60)," + 
" `Care for Newcomer Children` VARCHAR(60)," + 
" `Transportation` VARCHAR(60)," + 
" `Provisions for Disabilities` VARCHAR(60)," + 
" `Translation` VARCHAR(60)," + 
" `Interpretation` VARCHAR(60)," + 
" `Crisis Counselling` VARCHAR(60)," + 
" `Non-IRCC program services needed` VARCHAR(60)," + 
" `Food/Clothing/Other Material Needs` VARCHAR(60)," + 
" `Food/Clothing/Other Material Needs Referrals` VARCHAR(60)," + 
" `Housing/Accommodation` VARCHAR(60)," + 
" `Housing/Accommodation Referrals` VARCHAR(60)," + 
" `Health/Mental Health/Well Being` VARCHAR(60)," + 
" `Health/Mental Health/Well Being Referrals` VARCHAR(60)," + 
" `Financial` VARCHAR(60)," + 
" `Financial Referrals` VARCHAR(60)," + 
" `Family Support` VARCHAR(60)," + 
" `Family Support Referrals` VARCHAR(60)," + 
" `Language (Non-IRCC)` VARCHAR(60)," + 
" `Language (Non-IRCC) Referrals` VARCHAR(60)," + 
" `Education/Skills Development` VARCHAR(60)," + 
" `Education/Skills Development Referrals` VARCHAR(60)," + 
" `Employment-related` VARCHAR(60)," + 
" `Employment-related Referrals` VARCHAR(60)," + 
" `Legal Information and Services` VARCHAR(60)," + 
" `Legal Information and Services Referrals` VARCHAR(60)," + 
" `Community Services` VARCHAR(60)," + 
" `Community Services Referrals` VARCHAR(60)," + 
" `Support Services Received` VARCHAR(60)," + 
" `Care for Newcomer Children recieved?` VARCHAR(60)," + // REPEAT OF LINE 607
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation Recieved?` VARCHAR(60)," +         // REPEAT OF LINE 608 ASK LATER
" `Provisions for Disabilities Recieved?` VARCHAR(60)," +  // REPEAT OF LINE 609
" `Translation?` VARCHAR(60)," + 
" `Translation language Between` VARCHAR(60)," +  // DO THIS FOR BETWEEN and ands
" `Translation language And` VARCHAR(60)," + 
" `Interpretation?` VARCHAR(60)," + 
" `Interpretation language Between` VARCHAR(60)," + 
" `Interpretation language And` VARCHAR(60)," + 
" `Crisis Counselling Recieved?` VARCHAR(60)," +       // REPEAT OF LINE 112
" `Settlement Plan completed and shared with client` VARCHAR(60)," + 
" `End Date of Assessment (YYYY-MM-DD)` DATE," + 
" `Reason for update` VARCHAR(60)," +
" PRIMARY KEY(`Unique Identifier`, `Unique Identifier Value`, `Update Record ID`)");


create_table ('community', // ADD ORGINAIZATION ID AS PRIMARY FORIEGN KEY
" `Processing Details` VARCHAR(255)," + 
" `Update Record ID` INT," + 
" `Unique Identifier` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(60)," + 
" `Language of Service` VARCHAR(60)," + 
" `Official Language of Preference` VARCHAR(60)," + 
" `Referred By` VARCHAR(60)," + 
" `Activity Under Which Client Received Services` VARCHAR(60)," + 
" `Type of Organization Where Client Received Services` VARCHAR(60)," + 
" `Type of Event Attended` VARCHAR(60)," + 
" `Type of Service` VARCHAR(60)," + 
" `Main Topic/Focus of the Service Received` VARCHAR(60)," + 
" `Service Received` VARCHAR(100)," + 
" `Number of Unique Participants` VARCHAR(60)," + 
" `Did Host Community Volunteers Participate in the Activity` VARCHAR(60)," + 
" `Directed at a Specific Target Group` VARCHAR(60)," + 
" `Target Group: Children (0-14 yrs)` VARCHAR(60)," + 
" `Target Group: Youth (15-24 yrs)` VARCHAR(60)," + 
" `Target Group: Senior` VARCHAR(60)," + 
" `Target Group: Gender-specific` VARCHAR(60)," + 
" `Target Group: Refugees` VARCHAR(60)," + 
" `Target Group: Ethnic/cultural/linguistic group` VARCHAR(60)," + 
" `Target Group: Deaf or Hard of Hearing` VARCHAR(60)," + 
" `Target Group: Blind or Partially Sighted` VARCHAR(60)," + 
" `Target Group: Lesbian, Gay, Bisexual, Transgender, Queer (LGBTQ)` VARCHAR(60)," + 
" `Target Group: Families/Parents` VARCHAR(60)," + 
" `Target Group: Other impairments (physical, mental)` VARCHAR(60)," + 
" `Target Group: Clients with training in regulated profession` VARCHAR(60)," + 
" `Target Group: Clients with training in a regulated trade` VARCHAR(60)," + 
" `Target Group: Official language minorities` VARCHAR(60)," + 
" `Status of Service` VARCHAR(60)," + 
" `Reason for Leaving Service` VARCHAR(60)," + 
" `Start Date (YYYY-MM-DD)` DATE," + // PRIMARY KEY?!?! 
" `End Date (YYYY-MM-DD)` DATE," +   // PRIMARY KEY?!!?
" `Projected End Date (YYYY-MM-DD)` DATE," + 
" `Was Essential Skills and Aptitudes Training Received?` VARCHAR(60)," + 
" `Computer Skills` VARCHAR(60)," + 
" `Document Use` VARCHAR(60)," + 
" `Interpersonal Skills and Workplace Culture` VARCHAR(60)," + 
" `Leadership Training` VARCHAR(60)," + 
" `Life Skills` VARCHAR(60)," + 
" `Numeracy` VARCHAR(60)," + 
" `Support Services Received` VARCHAR(60)," + 
" `Care for Newcomer Children` VARCHAR(60)," + 
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation` VARCHAR(60)," + 
" `Provisions for Disabilities` VARCHAR(60)," + 
" `Translation?` VARCHAR(60)," + 
" `Translation language Between` VARCHAR(60)," +  // DO THIS FOR BETWEEN and ands
" `Translation language And` VARCHAR(60)," + 
" `Interpretation?` VARCHAR(60)," + 
" `Interpretation language Between` VARCHAR(60)," + 
" `Interpretation language And` VARCHAR(60)," + 
" `Crisis Counselling` VARCHAR(60)," + 
" `Total Length of Service: Hours` INT," + 
" `Total Length of Service: Minutes` INT," + 
" `Reason for update` VARCHAR(60)," +
" PRIMARY KEY(`Unique Identifier`, `Unique Identifier Value`, `Update Record ID`)");

create_table("infoorient",
" `Processing Details` VARCHAR(255)," + 
" `Update Record ID` INT," + 
" `Unique Identifier` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(60)," + 
" `Start Date of Service (YYYY-MM-DD)` DATE," + //PRIMARY KEY?!
" `Language of Service` VARCHAR(60)," + 
" `Official Language of Preference` VARCHAR(60)," + 
" `Type of Organization Where Client Received Services` VARCHAR(60)," + 
" `Referred By` VARCHAR(60)," + 
" `Services Received` VARCHAR(60)," + 
" `Total Length of Orientation` VARCHAR(60)," + 
" `Total Length of Orientation: Hours` INT," + 
" `Total Length of Orientation: Minutes` INT," + 
" `Number of Clients in Group` VARCHAR(60)," + 
" `Directed at a specific Target Group` VARCHAR(60)," + 
" `Target Group: Children (0-14 yrs)` VARCHAR(60)," + 
" `Target Group: Youth (15-24 yrs)` VARCHAR(60)," + 
" `Target Group: Seniors` VARCHAR(60)," + 
" `Target Group: Gender-specific` VARCHAR(60)," + 
" `Target Group: Refugees` VARCHAR(60)," + 
" `Target Group: Ethnic/cultural/linguistic group` VARCHAR(60)," + 
" `Target Group: Deaf or Hard of Hearing` VARCHAR(60)," + 
" `Target Group: Blind or Partially Sighted` VARCHAR(60)," + 
" `Target Group: Lesbian, Gay, Bisexual, Transgender, Queer (LGBTQ)` VARCHAR(60)," + 
" `Target Group: Families/Parents` VARCHAR(60)," + 
" `Target Group: Clients with other impairments` VARCHAR(60)," + 
" `Target Group: Clients with training in regulated profession` VARCHAR(60)," + 
" `Target Group: Clients with training in regulated trade` VARCHAR(60)," + 
" `Target Group: Official Language minorities` VARCHAR(60)," + 
" `Overview of Canada` VARCHAR(60)," + 
" `Overview of Canada Referrals` VARCHAR(60)," + 
" `Sources of Information` VARCHAR(60)," + 
" `Sources of Information Referrals` VARCHAR(60)," + 
" `Rights and Freedoms` VARCHAR(60)," + 
" `Rights and Freedoms Referrals` VARCHAR(60)," + 
" `Canadian Law and Justice` VARCHAR(60)," + 
" `Canadian Law and Justice Referrals` VARCHAR(60)," + 
" `Important Documents` VARCHAR(60)," + 
" `Important Documents Referrals` VARCHAR(60)," + 
" `Improving English or French` VARCHAR(60)," + 
" `Improving English or French Referrals` VARCHAR(60)," + 
" `Employment and Income` VARCHAR(60)," + 
" `Employment and Income Referrals` VARCHAR(60)," + 
" `Education` VARCHAR(60)," + 
" `Education Referrals` VARCHAR(60)," + 
" `Housing` VARCHAR(60)," + 
" `Housing Referrals` VARCHAR(60)," + 
" `Health` VARCHAR(60)," + 
" `Health Referrals` VARCHAR(60)," + 
" `Money and Finances` VARCHAR(60)," + 
" `Money and Finances Referrals` VARCHAR(60)," + 
" `Transportation` VARCHAR(60)," +         // duplicate transportaition
" `Transportation Referrals` VARCHAR(60)," + 
" `Communications and Media` VARCHAR(60)," + 
" `Communications and Media Referrals` VARCHAR(60)," + 
" `Community Engagement` VARCHAR(60)," + 
" `Community Engagement Referrals` VARCHAR(60)," + 
" `Becoming a Canadian Citizen` VARCHAR(60)," + 
" `Becoming a Canadian Citizen Referrals` VARCHAR(60)," + 
" `Interpersonal Conflict` VARCHAR(60)," + 
" `Interpersonal Conflict Referrals` VARCHAR(60)," + 
" `Was Essential Skills and Aptitude Training Received?` VARCHAR(60)," + 
" `Computer skills` VARCHAR(60)," + 
" `Document Use` VARCHAR(60)," + 
" `Interpersonal Skills and Workplace Culture` VARCHAR(60)," + 
" `Leadership Training` VARCHAR(60)," + 
" `Numeracy` VARCHAR(60)," + 
" `Was Life Skills or Responsibilities of Citizen Info Received` VARCHAR(60)," + 
" `Life Skills` VARCHAR(60)," + 
" `Rights and Responsibilities of Citizenship (discover Canada)` VARCHAR(60)," + 
" `Support Services Received` VARCHAR(60)," + 
" `Care for Newcomer Children` VARCHAR(60)," + 
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation Received?` VARCHAR(60)," + 
" `Provisions for Disabilities` VARCHAR(60)," + 
" `Translation?` VARCHAR(60)," + 
" `Translation language Between` VARCHAR(60)," +  // DO THIS FOR BETWEEN and ands
" `Translation language And` VARCHAR(60)," + 
" `Interpretation?` VARCHAR(60)," + 
" `Interpretation language Between` VARCHAR(60)," + 
" `Interpretation language And` VARCHAR(60)," + 
" `Crisis Counselling` VARCHAR(60)," + 
" `End Date of Service (YYYY-MM-DD)` DATE," + 
" `Reason for update` VARCHAR(60)," + 
" PRIMARY KEY(`Unique Identifier`, `Unique Identifier Value`, `Update Record ID`)");

// add organization id
create_table("employment", 
" `Processing Details` VARCHAR(255)," + 
" `Update Record ID` INT," + 
" `Unique Identifier` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(60)," + 
" `Registration in an employment intervention` VARCHAR(60)," + 
" `A referral to` VARCHAR(60)," + 
" `Language of Service` VARCHAR(60)," + 
" `Official Language of Preference` VARCHAR(60)," + 
" `Type of Organization Where Client Received Services` VARCHAR(60)," + 
" `Referred By` VARCHAR(60)," + 
" `Referral Date (YYYY-MM-DD)` DATE," + 
" `Employment Status` VARCHAR(60)," + 
" `Education Status` VARCHAR(60)," + 
" `Occupation in Canada` VARCHAR(60)," + 
" `Intended Occupation` VARCHAR(60)," + 
" `Intervention Type` VARCHAR(60)," + 
" `Long Term Intervention: Intervention Received` VARCHAR(60)," + 
" `Long Term Intervention: Status of Intervention` VARCHAR(60)," + 
" `Long Term Intervention: Reason For Leaving Intervention` VARCHAR(60)," + 
" `Long Term Intervention: Start Date (YYYY-MM-DD)` DATE," + 
" `Long Term Intervention: End Date (YYYY-MM-DD)` DATE," + 
" `Long Term Intervention: Size of Employer` VARCHAR(60)," + 
" `Long Term Intervention: Placement Was` VARCHAR(60)," + 
" `Long Term Intervention: Hours Per Week` VARCHAR(60)," + 
" `Long Term Intervention: Client Met Mentor Regularly at` VARCHAR(60)," + 
" `Long Term Intervention: Average Hours/Week with Mentor` INT," + 
" `Long Term Intervention: Profession` VARCHAR(60)," + 
" `Was Essential Skills and Aptitude Training Received?` VARCHAR(60)," + 
" `Computer skills` VARCHAR(60)," + 
" `Document Use` VARCHAR(60)," + 
" `Interpersonal Skills and Workplace Culture` VARCHAR(60)," + 
" `Leadership Training` VARCHAR(60)," + 
" `Numeracy` VARCHAR(60)," + 
" `Short Term Intervention1: Service Received` VARCHAR(60)," +  //NUMBER THESE
" `Short Term Intervention1: Date (YYYY-MM-DD)` DATE," + 
" `Short Term Intervention2: Service Received` VARCHAR(60)," + 
" `Short Term Intervention2: Date (YYYY-MM-DD)` DATE," + 
" `Short Term Intervention3: Service Received` VARCHAR(60)," + 
" `Short Term Intervention3: Date (YYYY-MM-DD)` DATE," + 
" `Short Term Intervention4: Service Received` VARCHAR(60)," + 
" `Short Term Intervention4: Date (YYYY-MM-DD)` DATE," + 
" `Short Term Intervention5: Service Received` VARCHAR(60)," + 
" `Short Term Intervention5: Date (YYYY-MM-DD)` DATE," + 
" `Support Services Received` VARCHAR(60)," + 
" `Care for Newcomer Children` VARCHAR(60)," + 
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation` VARCHAR(60)," + 
" `Provisions for Disabilities` VARCHAR(60)," + 
" `Translation?` VARCHAR(60)," + 
" `Translation language Between` VARCHAR(60)," +  // DO THIS FOR BETWEEN and ands
" `Translation language And` VARCHAR(60)," + 
" `Interpretation?` VARCHAR(60)," + 
" `Interpretation language Between` VARCHAR(60)," + 
" `Interpretation language And` VARCHAR(60)," + 
" `Crisis Counselling` VARCHAR(60)," + 
" `Time Spent With Client/Addressing Employment Needs: Hours` INT," + 
" `Time Spent With Client/Addressing Employment Needs: Minutes` INT," + 
" `Reason for update` VARCHAR(60)," + 
" PRIMARY KEY(`Unique Identifier`, `Unique Identifier Value`, `Update Record ID`)");
*/
// might add aa field to each table called month, who knows
