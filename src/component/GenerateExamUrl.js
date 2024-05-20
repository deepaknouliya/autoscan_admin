// // GenerateExamUrl.js
// import React from 'react';

// const GenerateExamUrl = ({ candidateData }) => {
//     let baseUrl = ''; // Initialize baseUrl
//     const candidateDetails = { 
//       user_id: candidateData.user_id,
//       appl_id: candidateData.appl_id, 
//       vacancy_type: candidateData.vacancyId,  
//     };
//     const generateRandomLongText = (length) => {
//       let result = '';
//       const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       const charactersLength = characters.length;
//       for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       }
//       return result;
//     };
    
//     const generateBase64Token = (applId) => {
//       const randomText = generateRandomLongText(25); // Adjust the length as needed
//       const combinedText = randomText + candidateDetails;
//       const base64Token = btoa(combinedText);
//       return base64Token;
//     };
//     const applId = candidateData?.appl_id;
    

//     // Check if window is defined (to avoid server-side rendering issues)
//     if (typeof window !== 'undefined') {
//         // Use window.location.origin to get base URL
//         // baseUrl = window.location.origin;
//         baseUrl = 'http://localhost:8000';

//     } else {
//         // Handle the case when window is not available (e.g., during server-side rendering)
//         // You can set a default base URL or handle it based on your specific requirements
//         baseUrl = process.env.REACT_APP_FRONTEND_URL; 
//     }
//     console.log('baseUrl::', baseUrl);

//     const token = generateBase64Token(applId) + '_' + candidateData?.appl_id + '_' + candidateData?.user_id + '_' + candidateData?.vacancyId;
//     let examLink = `${baseUrl}/hiring-assessment/${token}`; 
//     //console.log('Endpoint:', examLink);


//     return (
//         <div>
//             <p>{examLink}</p>
//         </div>
//     );
// };

// export default GenerateExamUrl;

const GenerateExamUrl = ({ candidateData }) => {
  let baseUrl = ''; // Initialize baseUrl

  const generateBase64Token = (data) => {
      const jsonString = JSON.stringify(data); // Convert array to JSON string
      const base64Token = btoa(jsonString); // Encode JSON string to Base64
      return base64Token;
  };
  
  // Example array data
  const candidateDetails = { 
    user_id: candidateData.user_id,
    appl_id: candidateData.appl_id, 
    vacancy_id: candidateData.vacancyId,  
  };
  const arrayData = [candidateData.appl_id, candidateData.user_id, candidateData.vacancyId];

  // Check if window is defined (to avoid server-side rendering issues)
  if (typeof window !== 'undefined') {
      baseUrl = 'http://localhost:8000';
  } else {
      baseUrl = process.env.REACT_APP_FRONTEND_URL; 
  }

  const token = generateBase64Token(candidateDetails);
  const examLink = `${baseUrl}/hiring-assessment/${token}`;

  return (
    <div>
      <p><a href={examLink} target="_blank">{examLink}</a></p>
    </div>
  
  );
};

export default GenerateExamUrl;
