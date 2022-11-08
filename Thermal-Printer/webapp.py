from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
from Adafruit_Thermal import *

printer = Adafruit_Thermal("/dev/serial0", 19200, timeout=5)

app = Flask(__name__)

@app.route("/sms", methods=['GET', 'POST'])
def rasp_twilio_sms_control():
    # get the SMS content
    sms_content = request.values.get('body', '')
    print(sms_content)
    printer.print(sms_content)
    sms_resp = MessagingResponse()
    return str(sms_resp)

if __name__ == "__main__":
    app.run(debug=True)



