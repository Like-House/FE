import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getNotificationSettings,
  updateNotificationSettings,
} from '@/apis/notifications';
import { QUERY_KEYS } from '@/constants/key';

const useNotificationSettings = () => {
  const queryClient = useQueryClient();

  const { data, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.NOTIFICATION],
    queryFn: getNotificationSettings,
  });

  const mutation = useMutation({
    mutationFn: ({ type, status }) => updateNotificationSettings(type, status),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.NOTIFICATION]);
    },
  });

  return {
    notificationSettings: data,
    isSuccess,
    updateSetting: mutation.mutate,
  };
};

export default useNotificationSettings;
