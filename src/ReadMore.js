import React from 'react';
import './ReadMore.css';

const ReadMore = () => {
  return (
    <div className='container readcontainer'>
      <h2 className='welcomemsg'>Welcome to IrtizaMediCare</h2>
      <p className='para'>
        At IrtizaMediCare, we believe in putting your health first. Our mission
        is to provide comprehensive and compassionate medical care that exceeds
        your expectations. We understand that navigating the world of healthcare
        can be overwhelming, and that's why we're here to guide you every step
        of the way.
      </p>
      <p className='para'>
        In our commitment to excellence, IrtizaMediCare proudly offers:
      </p>

      <ul>
        <li>
          <strong>
            <i className="material-icons">local_hospital</i> Patients Beds:
          </strong>{' '}
          850
        </li>
        <li>
          <strong>
            <i className="material-icons">sentiment_very_satisfied</i> Happy Patients:
          </strong>{' '}
          25,000+
        </li>
        <li>
          <strong>
            <i className="material-icons">people</i> Doctors & Nurses:
          </strong>{' '}
          750
        </li>
        <li>
          <strong>
            <i className="material-icons">videocam</i> Telemedicine:
          </strong>{' '}
          Connect with us remotely.
        </li>
        <li>
          <strong>
            <i className="material-icons">devices_other</i> Diagnostic Tech:
          </strong>{' '}
          Cutting-edge equipment for accurate diagnosis.
        </li>
        <li>
          <strong>
            <i className="material-icons">group</i> Community Health:
          </strong>{' '}
          Engage in our initiatives for a healthier community.
        </li>
      </ul>
      <h2 className='msg'>Our Commitment to Excellence</h2>
      <p className='para'>
        With a team of dedicated healthcare professionals, IrtizaMediCare is
        committed to delivering excellence in medical services. From preventive
        care to specialized treatments, we prioritize your well-being. Our
        state-of-the-art facilities and cutting-edge technology ensure that you
        receive the highest standard of care in a comfortable and nurturing
        environment.
      </p>

      <h2 className='msg'>Patient-Centric Approach</h2>
      <p className='para'>
        What sets IrtizaMediCare apart is our patient-centric approach. We
        recognize that each individual is unique, and we tailor our services to
        meet your specific needs. Whether you're seeking routine check-ups or
        dealing with a complex medical condition, our team is dedicated to
        providing personalized care that focuses on you as a whole person, not
        just a collection of symptoms.
      </p>

      <p className='para'>
        Explore the world of IrtizaMediCare, where your health is our priority.
        We invite you to discover the range of services we offer, learn about
        our experienced team, and see how we can partner with you on your
        journey to optimal health.
      </p>
    </div>
  );
};

export default ReadMore;
