import React from 'react';
import { Link } from 'react-router-dom';

const MBAOpportunities = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-50 py-4 px-4 sm:py-10 sm:px-10 mt-16 sm:mt-0'> {/* Added mt-16 for mobile view */}
      <div className='w-full sm:w-11/12 md:w-3/4 max-w-6xl p-4 sm:p-6 bg-white text-black rounded-lg shadow-lg'> 
        <div className='border-2 p-2 sm:p-4 rounded-md'> 
          <h2 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4'>MBA Internship & Job Opportunities</h2>
          <p className='text-gray-700 text-sm sm:text-base'>Explore the latest openings in your dream career path.</p>

          <div className='mt-4 sm:mt-6'>
            <h3 className='text-lg sm:text-xl font-semibold'>Dear MBA Students,</h3>
            <p className='mt-2 text-sm sm:text-base'>
              Egg Bucket, a fast-growing startup revolutionizing the farm-to-doorstep egg supply chain, is offering a 3-month unpaid summer internship in Business Consulting. This is an excellent opportunity for MBA students looking to gain hands-on experience in business strategy, financial analysis, and consulting within a real-world startup environment.
            </p>

            <h4 className='text-base sm:text-lg font-semibold mt-3 sm:mt-4'>Internship Details:</h4>
            <ul className='list-disc ml-4 sm:ml-5 text-gray-600 text-sm sm:text-base'>
              <li>Duration: 3 months (Summer 2025)</li>
              <li>Mode: Remote (based on project needs)</li>
              <li>Domain: Business Consulting (Including Business Functions & Finance)</li>
              <li>Perks: Certificate of Completion, Mentorship from Industry Experts, and Real-World Project Exposure</li>
            </ul>

            <h4 className='text-base sm:text-lg font-semibold mt-3 sm:mt-4'>Who Can Apply?</h4>
            <ul className='list-disc ml-4 sm:ml-5 text-gray-600 text-sm sm:text-base'>
              <li>MBA students with a strong foundation in business functions such as marketing, operations, strategy, and finance</li>
              <li>Knowledge or interest in financial modeling, budgeting, and analysis</li>
              <li>Passion for startups, problem-solving, and innovative thinking</li>
            </ul>

            <h4 className='text-base sm:text-lg font-semibold mt-3 sm:mt-4'>Apply:</h4>
            <p className='text-gray-700 text-sm sm:text-base'>
              Interested candidates can apply by clicking the link below and filling in their details. Our team will review the applications and get back to you for the next steps in the hiring process.
            </p>

            <div className='mt-3 sm:mt-4 flex justify-center sm:justify-start'> 
              <Link
                to={'https://forms.gle/DmuKTndUCdarF2KW6'}
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-bold rounded-full shadow-md transition-all duration-300 hover:bg-orange-600 text-sm sm:text-base'
              >
                Apply Now
              </Link>
            </div>

            <p className='mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base'>
              For any queries, feel free to reach out. We look forward to having talented individuals contribute to Egg Bucket's business growth and success!
            </p>
            <p className='mt-2 text-gray-600 text-sm sm:text-base'>
              Best regards,<br />Egg Bucket Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBAOpportunities;