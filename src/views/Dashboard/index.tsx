import { useEffect } from 'react';
import {
  useCreatePostMutation,
  useGetAwardsQuery,
  useGetServicesQuery,
} from '@Api/dashboard';

export default function Dashboard() {
  // fetch services data
  const { data: servicesData } = useGetServicesQuery();

  // fetch awards data
  const { data: awardsData = [], isFetching: isAwardsDataFetching } =
    useGetAwardsQuery({
      // fetch awards data only when services data is fetched
      enabled: !!servicesData,
    });

  // create post mutation
  const { mutate: createPost } = useCreatePostMutation();

  useEffect(() => {
    const payloadData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    createPost(payloadData);
  }, [createPost]);

  return (
    <div>
      <h1>Naxa Services</h1>
      <ul>
        {servicesData?.map(service => (
          <li key={service.id}>{service.title}</li>
        ))}
      </ul>

      {isAwardsDataFetching && <h3>loading..</h3>}

      {awardsData.map(awards => awards.title)}
    </div>
  );
}
