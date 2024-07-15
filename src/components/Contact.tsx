function Contact() {
  return (
    <div id="contact" className="flex justify-center py-12">
      <div className="flex flex-col w-[80%] gap-4">
        <div>
          <div className="font-medium text-2xl">
            <h1>Contact</h1>
          </div>
          <div>
            <p>Contact me using my email below!</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <div className="font-medium text-xl">
              <h1>Mail</h1>
            </div>
            <div className="hover:text-blue-400">
              <p>jjacobjurgens@gmail.com</p>
            </div>
          </div>
          <div>
            <div className="font-medium text-xl">
              <h1>Location</h1>
            </div>
            <div className="hover:text-blue-400">
              <p>Brisbane, Australia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
