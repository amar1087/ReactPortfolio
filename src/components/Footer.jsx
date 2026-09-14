import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <span>© {year} Amarjeet Kaur</span>
        <span>Built with care, one commit at a time.</span>
      </div>
    </footer>
  );
}
