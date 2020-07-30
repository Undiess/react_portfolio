import React,{useState} from "react"

function Contact(){ 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const send= (event) =>{ 
        const templateId = 'contact';
        sendFeedback(templateId, {message_html: message, from_name: name, from_email: email})
    }

    const sendFeedback = (templateId, variables) => {
       console.log(templateId)
       console.log(variables)
        window.emailjs.send(
          'nguyen.andy67@gmail.com', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    return(
        <div>
            <div className="imagebackground">
              <div className="getintouch">
                  Get in touch
              </div>
              <div className="words">
                Have any more questions or want to know more? Please feel free to contact me
              </div>

        
          </div>
          <div className="form"> 
            <form action="#">
            <div className="form-group">
                <label for="form_name">Name <strong>required</strong></label>
                <input  onChange={e=> setName(e.target.value)} type="text" className="form-control" id="form_name" name="user_name" placeholder="John Smith" required=""/>
            </div>
    
            <div className="form-group">
                <label for="form_email">Email <strong>(required)</strong></label>
                <input onChange={e=> setEmail(e.target.value)} type="text" className="form-control" id="form_email" name="user_email" placeholder="john.smith@example.com" required=""/>
            </div>
    
            <label for="form_message">Message <strong>(required)</strong></label>
            <textarea onChange={e=> setMessage(e.target.value)} className="form-control" id="form_message" maxlength="200" rows="6" required=""></textarea>
    
            <input onClick={send} type="submit" id="form_submit" value="Submit" className="btn btn-outline-primary"/>
           </form>
          </div>
        </div>

    )
}
export default Contact