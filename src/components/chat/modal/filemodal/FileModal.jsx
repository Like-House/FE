import usePostEmoticon from '@/hooks/queries/chat/usePostEmoticon';
import * as S from './FileModal.sytle';

import { CustomButton, ModalPortal } from '@/components';
import useFile from '@/hooks/useFile';
import useModalStore from '@/store/useModalStore';
import { BsXCircle } from 'react-icons/bs';
import useGetFamilySpaceId from '@/hooks/queries/family/useGetFamilySpaceId';
import { createPresignedURL, uploadImageToS3 } from '@/apis';

const FileModal = () => {
	const { fileModal, fileOpen } = useModalStore(state => state);
	const { filesPreview, files, handleChangeFiles, filesClear } = useFile();
	const { data: SpaceData } = useGetFamilySpaceId();
	const { mutate } = usePostEmoticon();

	const handleExit = () => {
		fileOpen();
		filesClear();
	};

	const handleSubmit = async () => {
		for (let i = 0; i < files.length; i++) {
			const data = await createPresignedURL(files[0].name);
			await uploadImageToS3({ url: data.result.url, file: files[0] });

			mutate({
				familySpaceId: SpaceData?.familySpaceId,
				imageKeyName: data.result.keyName,
			});
		}
		fileOpen();
		filesClear();
	};

	return (
		<ModalPortal>
			<S.Container $fileModal={fileModal}>
				<S.Wrapper>
					<BsXCircle className="close" onClick={handleExit} size={16} />
					<S.Content>
						<h4>파일 첨부</h4>
						<p>500KB 이하의 JPG, PNG 파일만 업로드할 수 있습니다.</p>
						{filesPreview.length !== 0 ? (
							<S.ImgContainer>
								{filesPreview.map((e, idx) => (
									<img key={idx} src={e} />
								))}
							</S.ImgContainer>
						) : (
							<S.ImgContainer>
								<label htmlFor="file">사진 올리기</label>
								<S.FileInput
									multiple
									type="file"
									id="file"
									onChange={handleChangeFiles}
								/>
							</S.ImgContainer>
						)}
					</S.Content>
					<S.BtnWrapper>
						<CustomButton
							btnType="primary"
							label="취소"
							disabled={files.length === 0}
							onClick={handleExit}
						/>
						<CustomButton
							btnType="primary"
							label="파일업로드"
							disabled={files.length == 0}
							onClick={handleSubmit}
						/>
					</S.BtnWrapper>
				</S.Wrapper>
			</S.Container>
		</ModalPortal>
	);
};

export default FileModal;
