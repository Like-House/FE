import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants/key';
import {
  getNotificationSettings,
  updateNotificationSetting,
} from '../../../apis/notifications';

const useNotificationSettings = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.NOTIFICATION_SETTINGS],
    queryFn: getNotificationSettings,
  });

  const updateSetting = (type) => {
    return useMutation((status) => updateNotificationSetting(type, status), {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.NOTIFICATION_SETTINGS]);
      },
    });
  };

  return { data, isLoading, error, updateSetting };
};

export default useNotificationSettings;
