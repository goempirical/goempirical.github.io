import { GetServerSidePropsContext } from 'next';

function createRobots(hostname = '') {
  return `Sitemap: ${hostname}/sitemap.xml`;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Content-Type', 'text/plain');
  context.res.write(createRobots(context.req.headers.host));
  context.res.end();
  return {
    props: {},
  };
}

function Robots() {
  return null;
}
export default Robots;
