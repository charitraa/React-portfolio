import React, { useState } from 'react';
import contactBg from '../assets/images/contact-bg.png';
import { MdCall as Call, MdMail as Mail, MdLocationOn as Location } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        toast.success('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      toast.error(`An error occurred ${error}. Please try again.`);
    }
  };

  return (
    <>
      <main>
        <article>
          <section
            className="section contact has-bg-image"
            aria-labelledby="contact-label"
            style={{ backgroundImage: `url('${contactBg}')` }}
          >
            <div className="container">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="01149aa1-a81d-46af-9b2c-5b2ddc9ed09b"
                />

                <h2 className="headline-sm" id="contact-label">
                  Get in touch
                </h2>

                <p className="contact-text body-md">
                  Our friendly team would love to hear from you.
                </p>

                <div className="wrapper">
                  <div>
                    <label htmlFor="name" className="label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <label htmlFor="subject" className="label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                />

                <label htmlFor="message" className="label">
                  Your message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="input-field"
                ></textarea>

                <button type="submit" className="btn btn-tertiary">
                  Send Message
                </button>
              </form>

              <div className="contact-content">
                <ul className="contact-list">
                  <li className="contact-item">
                    <div
                      className="item-icon"
                      style={{ backgroundColor: 'hsl(177, 39%, 72%)' }}
                    >
                      <Call
                        
                        color={'#00000'}
                        height="25px"
                        width="25px"
                      />
                    </div>

                    <div>
                      <p className="label-lg">Phone</p>
                      <a href="tel:+9779847206256" className="body-lg">
                        +9779847206256
                      </a>
                    </div>
                  </li>

                  <li className="contact-item">
                    <div
                      className="item-icon"
                      style={{ backgroundColor: 'hsl(41, 99%, 64%)' }}
                    >
                      <Mail
                        color={'#00000'}
                        height="25px"
                        width="25px"
                      />
                    </div>

                    <div>
                      <p className="label-lg">Mail</p>
                      <a
                        href="mailto:stharabi9862187405@gmail.com"
                        className="body-lg"
                      >
                        stharabi9862187405@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="contact-item">
                    <div
                      className="item-icon"
                      style={{ backgroundColor: 'hsl(19, 97%, 85%)' }}
                    >
                      <Location
                        color={'#00000'}
                        height="25px"
                        width="25px"
                      />
                    </div>

                    <div>
                      <p className="label-lg">View My Location</p>
                      <address className="body-lg">
                        Bhaktapur, khaushaltar, Nepal
                      </address>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
      <ToastContainer />
    </>
  );
};

export default Contact;
