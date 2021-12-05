const SuperLink = ({ href, ...props }) => (
  <a
    targe={href.startsWith('http') ? '_blank' : undefined}
    {...props}
    href={href}
  />
);