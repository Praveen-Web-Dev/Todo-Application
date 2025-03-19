using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class TaskItem
{
    [Key]
    public int Id { get; set; }
     [Required]
        public string Title { get; set; }

        public required string Description { get; set; }

        public DateTime? DueDate { get; set; }

        public bool IsCompleted { get; set; } = false;
}
