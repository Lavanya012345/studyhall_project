

import requests
import pandas as pd
import matplotlib
matplotlib.use('Agg')  # Use a non-interactive backend
import matplotlib.pyplot as plt
import io
from flask import Flask, jsonify, send_file

app = Flask(__name__)

def get_data_from_nodejs():
    response = requests.get('http://localhost:3000/api/booking-data')
    data = response.json()
    df = pd.DataFrame(data)
    return df

def generate_chart():
    df = get_data_from_nodejs()
    seats_per_hall = df.groupby('hall_id')['amount'].sum()
    
    
    # Increase the figure size (width, height) in inches
    fig, ax = plt.subplots(figsize=(50, 40))  # Increase the figure size here
    
    # Generate a list of random colors for each bar
    num_bars = len(seats_per_hall)
    colors = [plt.cm.get_cmap('Set3')(i / num_bars) for i in range(num_bars)]

    fig, ax = plt.subplots()
    seats_per_hall.plot(kind='bar', ax=ax, color = colors)
    ax.set_title('Total Seats Booked Per Study Hall')
    ax.set_xlabel('HALL_ID')
    ax.set_ylabel('AMOUNT')
    

    
    # Save the plot to a file
    plt.savefig('seats_booked.png')
    plt.close(fig)  # Close the figure to free memory
    return 'seats_booked.png'

@app.route('/api/analytics', methods=['GET'])
def analytics():
    try:
        filepath = generate_chart()
        return send_file(filepath, mimetype='image/png')
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)





#interactive code

# import requests
# import pandas as pd
# import plotly.express as px
# from flask import Flask, jsonify
# from flask_cors import CORS 

# app = Flask(__name__)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# def get_data_from_nodejs():
#     response = requests.get('http://localhost:3000/api/booking-data')
#     data = response.json()
#     df = pd.DataFrame(data)
#     return df

# def generate_chart():
#     df = get_data_from_nodejs()
#     seats_per_hall = df.groupby('hall_id')['amount'].sum().reset_index()
#     fig = px.bar(seats_per_hall, x='hall_id', y='amount', title='Total Seats Booked Per Study Hall',
#                  labels={'hall_id': 'Hall ID', 'amount': 'Amount'})
#     # Plotly figures can be converted to HTML strings or JSON
#     return fig.to_html(full_html=False)

# @app.route('/api/analytics', methods=['GET'])
# def analytics():
#     try:
#         buf = generate_chart()
#         print("Chart generated successfully!")  # Debug statement
#         return send_file(buf, mimetype='image/png')
#     except Exception as e:
#         print(f"Error generating chart: {str(e)}")  # Error logging
#         return jsonify({'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)
