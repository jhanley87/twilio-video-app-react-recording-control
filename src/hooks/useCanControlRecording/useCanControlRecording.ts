import useVideoContext from '../useVideoContext/useVideoContext';

function checkIdentityCanControlRecording(identity: string | undefined) {
  //This is where we could call on your backend API
  //to check if the identity of this participant is allowed to start/stop recording
  //for example purposes we can check for a magic string

  return identity?.includes('can-control');
}

export default function useIsRecording() {
  const { room } = useVideoContext();

  return checkIdentityCanControlRecording(room?.localParticipant.identity);
}
