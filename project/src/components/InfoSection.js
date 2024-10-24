const InfoSection = () => {
  return (
    <div className="pl-8 space-y-8 w-[97%]">
      <p>
        The Career Recommendation System is designed to assist students in
        making informed career decisions by analyzing their academic
        performance, interests, and skills. Using advanced data analytics and
        machine learning algorithms, this system provides personalized career
        recommendations.
      </p>

      <div className="space-y-3">
        <h3>Key Features:</h3>
        <ul className="list-disc ml-5">
          <li>Personalized career guidance based on individual profiles.</li>
          <li>Insights into job market trends and necessary qualifications.</li>
          <li>User-friendly dashboard for easy navigation.</li>
          <li>Data security and privacy compliance.</li>
          <li>Support for multiple user profiles.</li>
          <li>
            Admin capabilities for managing user data and system performance.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3>How It Works:</h3>
        <ol className="list-decimal ml-5">
          <li>Users register and create a profile.</li>
          <li>
            Complete assessments to gather information on skills and interests.
          </li>
          <li>The system analyzes data using machine learning algorithms.</li>
          <li>Receive personalized career recommendations.</li>
          <li>Explore detailed information on recommended careers.</li>
        </ol>
      </div>
    </div>
  );
};

export default InfoSection;
