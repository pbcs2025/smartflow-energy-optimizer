const int PIR_PIN = 14;
const int RELAY_PIN = 26;

void setup() {
  Serial.begin(115200);
  pinMode(PIR_PIN, INPUT);
  pinMode(RELAY_PIN, OUTPUT);
}

void loop() {
  int motion = digitalRead(PIR_PIN);
  if (motion == HIGH) {
    Serial.println("Motion detected — turning ON");
    digitalWrite(RELAY_PIN, HIGH);
  } else {
    Serial.println("No motion — turning OFF");
    digitalWrite(RELAY_PIN, LOW);
  }
  delay(1000);
}