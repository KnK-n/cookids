"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import allLocales from "@fullcalendar/core/locales-all";
import { useState } from "react";
import interactionPlugin from "@fullcalendar/interaction";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const Calendar = () => {
  const events = [{ title: "かぶら", start: new Date() }]; // 仮で置いて。

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [clikedDate, setClickedDate] = useState("");

  const handleClickDialog = () => {
    setIsDialogOpen(true);
  };

  const handleDateSelect = (selectInfo: any) => {
    setClickedDate(selectInfo.start);
    handleClickDialog();
  };

  return (
    <Container maxWidth="lg">
      <Box>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          select={handleDateSelect}
          locale="ja"
          locales={allLocales}
          // events={events} // カレンダーのイベント表示
        />
        <Dialog open={isDialogOpen}>
          <DialogTitle>新規登録</DialogTitle>
          <DialogContent>
            <DatePicker label="日付" value={clikedDate} />
            <DialogActions>
              <Button onClick={() => setIsDialogOpen(false)} variant="outlined">
                キャンセル
              </Button>
              {/* ↓仮で登録ボタン作成 */}
              <Button onClick={() => setIsDialogOpen(false)} variant="contained">
                登録
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Box>
    </Container>
  );
};
