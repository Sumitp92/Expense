document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    // Create a new list item
    const li = document.createElement('li');
    li.className = 'expense-item';
    li.innerHTML = `
        <div>
            <strong>Amount:</strong> ${amount} <strong>Description:</strong> ${description} <strong>Category:</strong> ${category}
        </div>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    // Append the new list item to the expense list
    document.getElementById('expense-list').appendChild(li);

    // Clear form fields
    document.getElementById('expense-form').reset();

    // Delete functionality
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Edit functionality
    li.querySelector('.edit-btn').addEventListener('click', function() {
        document.getElementById('amount').value = amount;
        document.getElementById('description').value = description;
        document.getElementById('category').value = category;
        li.remove();
    });
});