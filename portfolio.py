from flask import Flask,render_template,request,redirect, url_for
from flask_mail import Mail, Message 

app=Flask(__name__)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'rishadroshan27778@gmail.com'
app.config['MAIL_PASSWORD'] = 'cwlw bisz aceb wsjj'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEFAULT_SENDER'] = 'your_email@gmail.com'
mail = Mail(app) 

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

# app.run()

@app.route('/contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        message = request.form['message']

        # Create the email message
        msg = Message(
            subject=f"{name} contacting you via portfolio",
            recipients=['rishadroshan27778@gmail.com'], 
            body=f"Name: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {message}"
        )

        try:
            # Send the email
            mail.send(msg)
            return redirect(url_for('index'))  # Redirect to homepage after sending the message
        except Exception as e:
            print(f"Error sending email: {e}")
            return "There was an error sending your message. Please try again later."

if __name__ == '__main__':
    app.run(debug=True)