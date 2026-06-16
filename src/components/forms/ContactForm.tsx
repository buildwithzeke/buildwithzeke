export default function ContactForm() {
    return (
        <form className="space-y-3 card ">
            <input className="field" placeholder="Your Name" />
            <input className="field" placeholder="Your Email" />
            <textarea className="field min-h-28 resize-none" placeholder="What do you need help with?" />
            <button className="btn-primary" type="button">
                Send Message <span>&rarr;</span>
            </button>
        </form>

    );
}