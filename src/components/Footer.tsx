const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Chirayu Choudhary. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
