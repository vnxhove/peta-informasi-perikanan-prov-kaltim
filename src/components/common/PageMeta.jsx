const PageMeta = ({ title, description }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
  </>
);

export const AppWrapper = ({ children }) => <article>{children}</article>;

export default PageMeta;
