"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format, parse, isValid } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"



const DATE_FORMAT = 'dd/MM/yyyy'

interface DatePickerInputProps {
  value?: Date | null,
    onChange?:(date:Date | null) => void,
}

export function DatePickerInput({value,onChange}: DatePickerInputProps) {
    const [inputValue, setInputValue] = useState(value ? format(value, DATE_FORMAT) : '')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() =>{
        setInputValue(value ? format(value, DATE_FORMAT) : '')
    },[value])

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      const text = e.target.value
      setInputValue(text)
  
      const parsed = parse(text, DATE_FORMAT, new Date())
      if (isValid(parsed) && text.length === DATE_FORMAT.length) {
        onChange?.(parsed)
      }
    }

    function handleCalendarSelect(date: Date | undefined) {
      onChange?.(date ?? null)
      setInputValue(date ? format(date, DATE_FORMAT) : "")
      setIsOpen(false)
    }


    return (
      <div className="relative w-full max-w-[240px]">
        <Input
          placeholder="DD/MM/YYYY"
          value={inputValue}
          onChange={handleInputChange}
          className="pr-10"
        />
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            >
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0"
            onOpenAutoFocus={(event) => event.preventDefault()}
          >
            <Calendar
              mode="single"
              required={false}
              selected={value ?? undefined}
              onSelect={handleCalendarSelect}
              autoFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    )

}