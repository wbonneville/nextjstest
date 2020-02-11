import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  fontSize: 22,
  fontWeight: 100,
  fontFamily: "Futura"
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
