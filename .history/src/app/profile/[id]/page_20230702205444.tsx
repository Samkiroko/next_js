export default function UserParams({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <p>
        Profile page:{' '}
        <span className="bg-orange-600 p-2 rounded">{params.id}</span>{' '}
      </p>
    </div>
  );
}
