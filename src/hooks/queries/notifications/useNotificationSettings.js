import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateNotificationSettings } from '@/apis/notifications';
import { QUERY_KEYS } from '@/constants/key';

const useNotificationSettings = () => {
  const queryClient = useQueryClient();

  const updateSetting = (type) => {
    return useMutation((status) => updateNotificationSettings(type, status), {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.NOTIFICATION_SETTINGS]);
      },
    });
  };

  return { updateSetting };
};

export default useNotificationSettings;
