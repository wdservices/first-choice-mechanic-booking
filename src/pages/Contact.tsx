import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto py-10">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Address:</h3>
              <p>Unit 10, Tudor enterprise Park, London, United Kingdom</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone:</h3>
              <p>
                <a href="tel:+447412647713" className="text-mechanic-accent hover:underline">
                  +44 7412 647713
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email:</h3>
              <p>
                <a href="mailto:firstchoicetyres2021@gmail.com" className="text-mechanic-accent hover:underline">
                  firstchoicetyres2021@gmail.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;