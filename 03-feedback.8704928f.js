!function(){var e,t,a=document.querySelector(".feedback-form"),o=document.querySelector('[type="email"]'),l=document.querySelector('[name="message"]');e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e),console.dir(t),console.log(e),t&&(o.value=t.email,l.value=t.message),a.addEventListener("input",(function(e){e.preventDefault();var t=e.target.form.elements,a=t.email,o=t.message,l={email:a.value,message:o.value};console.log(JSON.stringify(l)),localStorage.setItem("feedback-form-state",JSON.stringify(l))}))}();
//# sourceMappingURL=03-feedback.8704928f.js.map