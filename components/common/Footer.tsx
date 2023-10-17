import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-white/[0.1] py-8">
      <Container>
        <p className="text-center text-sm text-slate-300 lg:text-base">
          &copy; {new Date().getFullYear()} Naimul Haque. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
