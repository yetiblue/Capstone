from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse
# from rpi_control.evaluation import evaluate
# from config import TWILIO_SMS_CONTROLLED_OBJECTS
print("running")
app = Flask(__name__)

@app.route("/sms", methods=['GET', 'POST'])
def rasp_twilio_sms_control():
    """perform action defined in a twilio SMS"""
    # get the SMS content
    sms_content = request.values.get('body', '')
    print(sms_content)
    #
    # evaluate the sms content
    # results = evaluate(TWILIO_SMS_CONTROLLED_OBJECTS, sms_content)

    # prepare the response and send it back
    sms_resp = MessagingResponse()
    # response_content = "\n".join(results)
    # sms_resp.message(response_content)

    return str(sms_resp)

if __name__ == "__main__":
    app.run(debug=True)



    #include Adafruit_Thermal.py inside project folder 
    # printer = Adafruit_Thermal("/dev/serial0", 19200, timeout=5)
    #printer.print(sms_content)