const e=document.querySelector(".feedback-form"),t=document.querySelector('[type="email"]'),o=document.querySelector('[name="message"]');!function(){const e=localStorage.getItem("feedback-form-state"),a=JSON.parse(e);console.dir(a),console.log(e),a&&(t.value=a.email,o.value=a.message)}(),e.addEventListener("input",(function(e){e.preventDefault();const{email:t,message:o}=e.target.form.elements,a={email:t.value,message:o.value};console.log(JSON.stringify(a)),localStorage.setItem("feedback-form-state",JSON.stringify(a))}));
//# sourceMappingURL=03-feedback.294b0c4a.js.map