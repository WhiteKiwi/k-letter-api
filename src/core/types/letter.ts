export class Letter {
	// letter 건당 생성되는 id
	id!: string;
	// 처리 상태
	status!: LetterStatus;
	soldierId!: string;
	작성자!: string;
	제목!: string;
	내용!: string;
}

export enum LetterStatusEnum {
	// 접수됨
	RECEIVED = 'RECEIVED',
	// 거부됨
	REJECTED = 'REJECTED',
	// 승인됨
	AGREED = 'AGREED',
	// 전송됨
	SENDED = 'SENDED',
}
export type LetterStatus = keyof typeof LetterStatusEnum;
