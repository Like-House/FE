import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateNotificationSettings } from '@/apis/notifications';
import { QUERY_KEYS } from '@/constants/key';

const useNotificationSettings = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ type, status }) => updateNotificationSettings(type, status),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.NOTIFICATION_SETTINGS]);
    },
  });

  return { updateSetting: mutation.mutate }; // updateSetting으로 mutation.mutate를 반환합니다.
};

export default useNotificationSettings;
