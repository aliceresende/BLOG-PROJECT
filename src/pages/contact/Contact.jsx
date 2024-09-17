// src/Contact.js
import "./contact.css";
import React, { useState } from 'react';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    // URL do Power Automate - a URL gerada no fluxo
    const url = "https://prod-251.westeurope.logic.azure.com:443/workflows/50731716f2e1435a8b051ab55efaa45e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-ny5zpBvxPGNrOfHlqvI0AVwn2IJpIVtYU_fyhgIMtM"; // Substitua pela URL do seu Power Automate

    try {
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) 
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso!');
      } else {
        alert('Ocorreu um erro ao enviar o formulário.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Ocorreu um erro ao enviar o formulário.');
    }
    setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
  };

  // Função para capturar os dados à medida que o usuário os insere no formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <div className="formSection">
        <div className="contactTitle">CONTACT ME</div>


        <div className="form">
    
          <div className="formC">
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <input type="text" id="name" placeholder="Name" value={formData.name} name="name" onChange={handleChange} required />
              </div>

              <div className="formGroup">
                <input type="email" id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required />
              </div>

              <div className="formGroup">
                <input type="tel" id="phone" name="phone" value={formData.phone} placeholder="Phone Number (Optional)" onChange={handleChange} />
              </div>

              <div className="formGroup">
                <textarea id="message" name="message" value={formData.message} placeholder="Message" onChange={handleChange} required></textarea>
              </div>

              <div className="formGroup">
                <button type="submit" className="submitButton">Submit</button>
              </div>
            </form>
          </div>

          <div className="imageSection">
            <img src="https://cdn-icons-png.flaticon.com/512/3771/3771518.png" alt="Contact" className="contactImage" />
          </div>
        </div>
  
          <div className="socialIcons">
            <p>Feel free to check out : </p>
          <a href="https://github.com/aliceresende" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aliceresende/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
