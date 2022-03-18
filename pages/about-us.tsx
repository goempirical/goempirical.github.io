import DefaultLayout from '@components/Layouts/Default';
import Text from '@components/Text';

function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-5 p-10">
        <Text variation="h1">About us</Text>
      </div>
    </DefaultLayout>
  );
}

export default Home;
