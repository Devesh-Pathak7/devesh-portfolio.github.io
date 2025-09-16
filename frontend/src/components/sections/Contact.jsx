import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../hooks/use-toast';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // send the form data to FastAPI
    const res = await fetch("http://127.0.0.1:8000/api/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_name: formData.name, // your backend expects "client_name"
        // you could also store email, subject, message in Mongo if you change backend model
      }),
    });

    if (!res.ok) throw new Error("Request failed");
    const data = await res.json();

    toast({
      title: "Message Sent!",
      description: `Thank you for your message. Saved with id ${data.id}.`,
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    toast({
      title: "Error",
      description: "Could not send your message",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: data.email,
      link: `mailto:${data.email}`
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: data.phone,
      link: `tel:${data.phone}`
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: data.location,
      link: null
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: data.linkedin
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Ready to discuss your next project or explore opportunities? 
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">
                    {info.icon}
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">{info.label}</span>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-info-value contact-info-link"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-availability">
              <div className="availability-status">
                <CheckCircle size={16} />
                <span>Available for new opportunities</span>
              </div>
              <p className="availability-text">
                Currently open to DevOps engineering roles, consulting projects, 
                and collaboration opportunities.
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="contact-input"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="contact-input"
                />
              </div>

              <div className="form-group">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="contact-textarea"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;